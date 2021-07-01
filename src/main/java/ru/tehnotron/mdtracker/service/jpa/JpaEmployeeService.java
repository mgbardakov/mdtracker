package ru.tehnotron.mdtracker.service.jpa;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.repository.EmployeeRepository;
import ru.tehnotron.mdtracker.service.EmployeeService;

@Service
@Transactional
public class JpaEmployeeService extends JpaCrudService<Employee, EmployeeRepository>
        implements EmployeeService {
    public JpaEmployeeService(EmployeeRepository repository) {
        super(repository);
    }
}
