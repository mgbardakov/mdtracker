package ru.tehnotron.mdtracker.service.jpa;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.tehnotron.mdtracker.api.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.mapper.EmployeeMapper;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.repository.EmployeeRepository;
import ru.tehnotron.mdtracker.service.EmployeeService;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class JpaEmployeeService implements EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final EmployeeMapper mapper;

    public JpaEmployeeService(EmployeeRepository employeeRepository, EmployeeMapper mapper) {
        this.employeeRepository = employeeRepository;
        this.mapper = mapper;
    }

    @Override
    public EmployeeDTO create(EmployeeDTO employeeDTO) {
        var employee = mapper.employeeDTOToEmployee(employeeDTO);
        return mapper.employeeToEmployeeDTO(employeeRepository.save(employee));
    }

    @Override
    public EmployeeDTO read(EmployeeDTO employeeDTO) {
        return mapper.employeeToEmployeeDTO(employeeRepository.findById(employeeDTO.getId()).orElse(null));
    }

    @Override
    public void update(EmployeeDTO employeeDTO) {
        var employee = mapper.employeeDTOToEmployee(employeeDTO);
        employeeRepository.save(employee);
    }

    @Override
    public void delete(EmployeeDTO employeeDTO) {
        var employee = mapper.employeeDTOToEmployee(employeeDTO);
        employeeRepository.delete(employee);
    }

    @Override
    public List<EmployeeDTO> findAll() {
        var employees = new ArrayList<Employee>();
        employeeRepository.findAll().forEach(employees::add);
        return mapper.employeeListToEmployeeDTOList(employees);
    }
}
