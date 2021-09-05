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
    UserDTO userToUserDTO(User user);
    @Mapping(target = "accountNonExpired", ignore = true)
    @Mapping(target = "accountNonLocked", ignore = true)
    @Mapping(target = "credentialsNonExpired", ignore = true)
    User userDTOToUser(UserDTO userDTO);
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateUserFromDTO(UserDTO userDTO, @MappingTarget User user);
    @Mapping(target = "password", ignore = true)
    List<UserDTO> userListToUserDTOList(List<User> users);
}
