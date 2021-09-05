package ru.tehnotron.mdtracker.service.jpa;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.tehnotron.mdtracker.api.v1.dto.entity.UserDTO;
import ru.tehnotron.mdtracker.api.v1.mapper.UserMapper;
import ru.tehnotron.mdtracker.domain.security.Authority;
import ru.tehnotron.mdtracker.domain.security.User;
import ru.tehnotron.mdtracker.repository.security.AuthorityRepository;
import ru.tehnotron.mdtracker.repository.security.UserRepository;
import ru.tehnotron.mdtracker.service.UserService;

import java.util.*;

@Slf4j
@Service
@Transactional
public class JpaUserService implements UserService {

    private final UserRepository userRepository;
    private final AuthorityRepository authorityRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper mapper;


   public JpaUserService(UserRepository userRepository,
                           AuthorityRepository roleRepository,
                           PasswordEncoder passwordEncoder,
                           UserMapper mapper) {
        this.userRepository = userRepository;
        this.authorityRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
        this.mapper = mapper;
    }

    @Override
    public UserDTO register(UserDTO userDTO) {
        User user = mapper.userDTOToUser(userDTO);
        Set<Authority> authorities = new HashSet<>();
        userDTO.getAuthorities().forEach(x -> authorityRepository.findAuthorityByRole(x.getRole()));
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setAuthorities(authorities);

        return mapper.userToUserDTO(userRepository.save(user));
    }

    @Override
    public List<UserDTO> getAll() {
        return mapper.userListToUserDTOList(userRepository.findAll());
    }

    @Override
    public UserDTO findById(Long id) {
        return mapper.userToUserDTO(userRepository.findById(id).orElse(null));
    }

    @Override
    public UserDTO findByUsername(String username) {
        return mapper.userToUserDTO(userRepository.findByUsername(username).orElse(null));
    }

    @Override
    public void updateUser(UserDTO userDTO) {
        userRepository.findByUsername(userDTO.getUsername()).ifPresent(user -> {
            mapper.updateUserFromDTO(userDTO, user);
            log.info("IN updateUser - user: {} successfully updated", user);
        });

    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
        log.info("IN delete - user with id: {} successfully deleted", id);
    }


}
