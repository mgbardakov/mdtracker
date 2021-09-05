package ru.tehnotron.mdtracker.service;

import org.springframework.security.core.AuthenticationException;
import ru.tehnotron.mdtracker.api.v1.dto.entity.UserDTO;

import javax.servlet.http.HttpServletResponse;

public interface AuthService {
    UserDTO authorize(UserDTO userDTO, HttpServletResponse resp) throws AuthenticationException;
}
