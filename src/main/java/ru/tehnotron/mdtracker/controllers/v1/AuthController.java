package ru.tehnotron.mdtracker.controllers.v1;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import ru.tehnotron.mdtracker.api.v1.dto.entity.UserDTO;

import ru.tehnotron.mdtracker.service.AuthService;
import ru.tehnotron.mdtracker.service.UserService;

import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping("api/v1/users/")
public class AuthController {

    private final AuthService authService;
    private final UserService userService;

    public AuthController(AuthService authService, UserService userService) {
        this.authService = authService;
        this.userService = userService;
    }

    @PostMapping(value = "login", consumes = {"application/json"})
    public UserDTO login(@RequestBody UserDTO userDTO, HttpServletResponse resp) {
        try {
            return authService.authorize(userDTO, resp);
        } catch (AuthenticationException e) {
            resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        }
        return null;
    }
}
