package ru.tehnotron.mdtracker.service.jpa;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.mapper.EmployeeMapper;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.repository.EmployeeRepository;
import ru.tehnotron.mdtracker.repository.PositionRepository;
import ru.tehnotron.mdtracker.service.EmployeeService;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class JpaEmployeeService implements EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final PositionRepository positionRepository;
    private final EmployeeMapper mapper;

    public JpaEmployeeService(EmployeeRepository employeeRepository, PositionRepository positionRepository, EmployeeMapper mapper) {
        this.employeeRepository = employeeRepository;
        this.positionRepository = positionRepository;
        this.mapper = mapper;
    }

    @Override
    public EmployeeDTO create(EmployeeDTO employeeDTO) {
        var employee = mapper.employeeDTOToEmployee(employeeDTO);
        positionRepository.findById(employeeDTO.getPosition().getId()).ifPresent(employee::setPosition);
        return mapper.employeeToEmployeeDTO(employeeRepository.save(employee));
    }

    @Override
    public EmployeeDTO read(EmployeeDTO employeeDTO) {
        return mapper.employeeToEmployeeDTO(employeeRepository.findById(employeeDTO.getId())
                .filter(Employee::isVisible).orElse(null));
    }

    @Override
    public void update(EmployeeDTO employeeDTO) {
        employeeRepository.findById(employeeDTO.getId())
                .filter(Employee::isVisible)
                .ifPresent(employee -> {
                    mapper.updateEmployeeFromDTO(employeeDTO, employee);
                    positionRepository.findById(employeeDTO.getPosition().getId()).ifPresent(employee::setPosition);
                    employeeRepository.save(employee);
                });
    }

    @Override
    public void delete(EmployeeDTO employeeDTO) {
        employeeRepository.findById(employeeDTO.getId()).ifPresent(x -> {
            x.setVisible(false);
            employeeRepository.save(x);
        });
    }

    @Override
    public List<EmployeeDTO> findAll() {
        var employees = new ArrayList<Employee>();
        employeeRepository.findAll().forEach(x -> {
            if (x.isVisible()) {
                employees.add(x);
            }
        });
        return mapper.employeeListToEmployeeDTOList(employees);
    }
}
