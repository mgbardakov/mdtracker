package ru.tehnotron.mdtracker.security;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import ru.tehnotron.mdtracker.domain.security.Authority;
import ru.tehnotron.mdtracker.domain.security.User;
import ru.tehnotron.mdtracker.exception.UserStateException;
import ru.tehnotron.mdtracker.repository.security.UserRepository;
import ru.tehnotron.mdtracker.security.jwt.JwtAuthenticationException;
import ru.tehnotron.mdtracker.service.UserService;

import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Slf4j
@Transactional
public class JwtUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public JwtUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @SneakyThrows
    @Override
    public UserDetails loadUserByUsername(String username) {

        Optional<User> oUser = userRepository.findByUsername(username);
        if (oUser.isEmpty()) {
            //throw new RuntimeException("exxx");
            throw new JwtAuthenticationException("token is corrupted");
        }
        var user = oUser.get();


        log.info("IN loadUserByUsername - user with username: {} successfully loaded", username);
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                user.getEnabled(), user.getAccountNonExpired(), user.getCredentialsNonExpired(),
                user.getAccountNonLocked(), convertToSpringAuthorities(user.getAuthorities()));
    }

    private Collection<? extends GrantedAuthority> convertToSpringAuthorities(Set<Authority> authorities) {
        if (authorities != null && authorities.size() > 0){
            return authorities.stream()
                    .map(Authority::getRole)
                    .map(SimpleGrantedAuthority::new)
                    .collect(Collectors.toSet());
        } else {
            return new HashSet<>();
        }
    }
}
