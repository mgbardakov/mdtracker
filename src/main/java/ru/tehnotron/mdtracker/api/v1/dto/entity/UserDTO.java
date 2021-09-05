package ru.tehnotron.mdtracker.api.v1.dto.entity;

import lombok.*;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.security.Authority;

import javax.persistence.*;
import java.util.Set;
@Setter
@Getter
@ToString

public class UserDTO extends BaseDTO {
    private String username;
    private String password;
    private EmployeeDTO employee;
    private Set<AuthorityDTO> authorities;
}
