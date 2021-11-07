package ru.tehnotron.mdtracker.controllers.v1;

import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import ru.tehnotron.mdtracker.api.v1.dto.entity.AuthorityDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.UserDTO;
import ru.tehnotron.mdtracker.service.UserService;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("api/v1/users/")
@PreAuthorize("hasRole('ADMIN')")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("create")
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        if (service.findByUsername(userDTO.getLogin()) != null) {
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Login is already taken");
        }
        return service.register(userDTO);
    }

    @GetMapping("{id}")
    public UserDTO getUser(@PathVariable long id) {
        return service.findById(id);
    }

    @PutMapping("update")
    public void updateUser(@RequestBody UserDTO userDTO) {
        service.updateUser(userDTO);
    }

    @PostMapping("delete")
    public void deleteUser(@RequestBody UserDTO userDTO) {
        service.delete(userDTO.getId());
    }

    @GetMapping()
    public List<UserDTO> getAllUsers() {
        return service.getAll();
    }

    @GetMapping("authorities")
    public Set<AuthorityDTO> getAllAuthorities() {
        return service.getAllAuthorities();
    }

}
