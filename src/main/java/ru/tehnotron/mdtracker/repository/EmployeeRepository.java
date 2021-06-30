package ru.tehnotron.mdtracker.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.tehnotron.mdtracker.domain.Employee;

import java.util.List;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
    @Query("select distinct e from Employee e join fetch e.devices where e.id = ?1")
    Employee findEmployeeWithFetchedDevices(Long id);
    @Query("select distinct e from Employee e join fetch e.devices")
    List<Employee> findAllEmployeesWithFetchedDevices();
}
