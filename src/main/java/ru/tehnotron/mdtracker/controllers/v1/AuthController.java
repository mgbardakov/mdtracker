package ru.tehnotron.mdtracker.controllers.v1;

import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.tehnotron.mdtracker.api.v1.dto.entity.UserDTO;

import ru.tehnotron.mdtracker.service.AuthService;

import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping("api/v1/users/")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("login")
    public UserDTO login(@RequestBody UserDTO userDTO, HttpServletResponse resp) {
        try {
            return authService.authorize(userDTO, resp);
        } catch (AuthenticationException e) {
            resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        }
        return null;
    }
}
