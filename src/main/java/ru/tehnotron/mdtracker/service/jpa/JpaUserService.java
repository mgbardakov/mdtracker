package ru.tehnotron.mdtracker.service.jpa;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.tehnotron.mdtracker.api.v1.dto.entity.AuthorityDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.UserDTO;
import ru.tehnotron.mdtracker.api.v1.mapper.AuthorityMapper;
import ru.tehnotron.mdtracker.api.v1.mapper.UserMapper;
import ru.tehnotron.mdtracker.domain.security.Authority;
import ru.tehnotron.mdtracker.domain.security.User;
import ru.tehnotron.mdtracker.repository.security.AuthorityRepository;
import ru.tehnotron.mdtracker.repository.security.UserRepository;
import ru.tehnotron.mdtracker.service.EmployeeService;
import ru.tehnotron.mdtracker.service.UserService;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.*;

@Slf4j
@Service
@Transactional
public class JpaUserService implements UserService {

    private final UserRepository userRepository;
    private final AuthorityRepository authorityRepository;
    private final EmployeeService employeeService;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;
    private final AuthorityMapper authorityMapper;
    @PersistenceContext
    private final EntityManager entityManager;


    public JpaUserService(UserRepository userRepository,
                          AuthorityRepository authorityRepository,
                          EmployeeService employeeService,
                          PasswordEncoder passwordEncoder,
                          UserMapper userMapper, AuthorityMapper authorityMapper,
                          EntityManager entityManager) {
        this.userRepository = userRepository;
        this.authorityRepository = authorityRepository;
        this.employeeService = employeeService;
        this.passwordEncoder = passwordEncoder;
        this.userMapper = userMapper;
        this.authorityMapper = authorityMapper;
        this.entityManager = entityManager;
    }

    @Override
    public UserDTO register(UserDTO userDTO) {
        User user = userMapper.userDTOToUser(userDTO);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userMapper.userToUserDTO(userRepository.save(user));
    }

    @Override
    public List<UserDTO> getAll() {
        return userMapper.userListToUserDTOList(userRepository.findAll());
    }

    @Override
    public UserDTO findById(Long id) {
        return userMapper.userToUserDTO(userRepository.findById(id).orElse(null));
    }

    @Override
    public UserDTO findByUsername(String username) {
        return userMapper.userToUserDTO(userRepository.findByUsername(username).orElse(null));
    }

    @Override
    public void updateUser(UserDTO userDTO) {
        employeeService.update(userDTO.getEmployee());
        userRepository.findByUsername(userDTO.getLogin()).ifPresent(user -> {
            userMapper.updateUserFromDTO(userDTO, user);
            var authorities = new HashSet<Authority>();
            authorityMapper.authorityDTOSetToAuthoritySet(userDTO.getAuthorities()).forEach(authority -> {
                authorityRepository.findById(authority.getId()).ifPresent(authorities::add);
            });
            if (authorities.size() > 0) {
                user.clearAuthorities();
                authorities.forEach(user::addAuthority);
            }
            if (userDTO.getPassword() != null) {
                user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
            }
            log.info("IN updateUser - user: {} successfully updated", user);
        });

    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
        log.info("IN delete - user with id: {} successfully deleted", id);
    }

    @Override
    public Set<AuthorityDTO> getAllAuthorities() {
        return authorityMapper.authoritySetToAuthorityDTOSet(new HashSet<>(authorityRepository.findAll()));
    }
}
