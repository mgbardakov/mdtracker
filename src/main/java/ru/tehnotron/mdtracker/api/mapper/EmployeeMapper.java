package ru.tehnotron.mdtracker.api.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import ru.tehnotron.mdtracker.api.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.domain.Employee;

import java.util.List;

@Mapper
public interface EmployeeMapper {

    EmployeeMapper INSTANCE = Mappers.getMapper(EmployeeMapper.class);

    EmployeeDTO employeeToEmployeeDTO (Employee employee);
    Employee employeeDTOToEmployee (EmployeeDTO employeeDTO);
    List<EmployeeDTO> employeeListToEmployeeDTOList (List<Employee> employees);
    List<Employee> employeeDTOListToEmployeeList (List<EmployeeDTO> employeeDTOs);
}
