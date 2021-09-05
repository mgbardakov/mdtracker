package ru.tehnotron.mdtracker.service;


import ru.tehnotron.mdtracker.api.v1.dto.entity.UserDTO;
import ru.tehnotron.mdtracker.domain.security.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    UserDTO register(UserDTO userDTO);

    List<UserDTO> getAll();

    UserDTO findById(Long id);

    UserDTO findByUsername(String username);

    void updateUser(UserDTO userDTO);

    void delete(Long id);
}
