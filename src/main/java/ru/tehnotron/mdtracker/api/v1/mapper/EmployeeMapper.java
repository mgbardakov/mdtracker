package ru.tehnotron.mdtracker.api.v1.mapper;

import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.PositionDTO;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.Position;

import java.util.List;

@Mapper
public interface EmployeeMapper {

    EmployeeMapper INSTANCE = Mappers.getMapper(EmployeeMapper.class);

    EmployeeDTO employeeToEmployeeDTO (Employee employee);
    @Mapping(target = "position", ignore = true)
    Employee employeeDTOToEmployee (EmployeeDTO employeeDTO);
    List<EmployeeDTO> employeeListToEmployeeDTOList (List<Employee> employees);
    List<Employee> employeeDTOListToEmployeeList (List<EmployeeDTO> employeeDTOs);
    @Mapping(target = "visible", ignore = true)
    @Mapping(target = "position", ignore = true)
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateEmployeeFromDTO(EmployeeDTO employeeDTO, @MappingTarget Employee employee);


}
