package ru.tehnotron.mdtracker.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.tehnotron.mdtracker.api.v1.dto.entity.UserDTO;
import ru.tehnotron.mdtracker.api.v1.mapper.UserMapper;
import ru.tehnotron.mdtracker.repository.security.UserRepository;
import ru.tehnotron.mdtracker.security.jwt.JwtTokenProvider;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@Service
@Transactional
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager;
    private final UserMapper userMapper;

    public AuthServiceImpl(UserRepository userRepository, JwtTokenProvider jwtTokenProvider, AuthenticationManager authenticationManager, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.authenticationManager = authenticationManager;
        this.userMapper = userMapper;
    }

    @Override
    public UserDTO authorize(UserDTO userDTO, HttpServletResponse resp) throws AuthenticationException {
        String username = userDTO.getLogin().toLowerCase();
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,
                userDTO.getPassword()));
        var user = userRepository.findByUsername(username).orElse(null);
        if (user != null) {
            var token = jwtTokenProvider.createToken(user.getUsername(), user.getAuthorities());
            var cookie = new Cookie("JWT", token);
            //cookie.setHttpOnly(true);
            //cookie.setSecure(true);
            resp.addCookie(cookie);
            return userMapper.userToUserDTO(user);
        }
        return null;

    }
}
