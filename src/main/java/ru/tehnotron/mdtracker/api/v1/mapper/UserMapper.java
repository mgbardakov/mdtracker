package ru.tehnotron.mdtracker.api.v1.mapper;

import org.mapstruct.*;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.UserDTO;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.security.User;

import java.util.List;

@Mapper
public interface UserMapper {
    @Mapping(target = "password", ignore = true)
    @Mapping(target = "login", source = "username")
    UserDTO userToUserDTO(User user);
    @Mapping(target = "accountNonExpired", ignore = true)
    @Mapping(target = "accountNonLocked", ignore = true)
    @Mapping(target = "credentialsNonExpired", ignore = true)
    @Mapping(target = "username", source = "login")
    User userDTOToUser(UserDTO userDTO);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "username", source = "login")
    void updateUserFromDTO(UserDTO userDTO, @MappingTarget User user);
    @Mapping(target = "password", ignore = true)
    @Mapping(target = "login", source = "username")
    List<UserDTO> userListToUserDTOList(List<User> users);
}
