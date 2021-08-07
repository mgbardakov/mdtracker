package ru.tehnotron.mdtracker.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.tehnotron.mdtracker.domain.Employee;


@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
