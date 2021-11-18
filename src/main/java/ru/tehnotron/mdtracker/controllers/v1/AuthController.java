package ru.tehnotron.mdtracker.controllers.v1;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.UserDTO;

import ru.tehnotron.mdtracker.service.AuthService;
import ru.tehnotron.mdtracker.service.UserService;

import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping("api/v1/users/")
public class AuthController {

    private final AuthService authService;


    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping(value = "login", consumes = {"application/json"})
    public EmployeeDTO login(@RequestBody UserDTO userDTO, HttpServletResponse resp) {
        try {
            return authService.authorize(userDTO, resp).getEmployee();
        } catch (AuthenticationException e) {
            throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY, "No such user");
        }
    }
}
