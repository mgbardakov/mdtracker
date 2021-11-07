package ru.tehnotron.mdtracker.service.jpa;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.mapper.EmployeeMapper;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.repository.EmployeeRepository;
import ru.tehnotron.mdtracker.repository.PositionRepository;
import ru.tehnotron.mdtracker.service.EmployeeService;


import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.when;

class JpaEmployeeServiceTest {

    @Mock
    EmployeeRepository repo;
    @Mock
    PositionRepository positionRepository;
    EmployeeService service;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        service = new JpaEmployeeService(repo, positionRepository, EmployeeMapper.INSTANCE);
    }


    @Test
    void whenReadVisibleEmployeeThenOneFounded() {
        var employee = new Employee();
        employee.setId(1L);
        when(repo.findById(any())).thenReturn(Optional.of(employee));

        assertEquals(service.read(new EmployeeDTO()).getId(), employee.getId());
    }

    @Test
    void whenReadInvisibleEmployeeThenNullFounded() {
        var employee = new Employee();
        employee.setVisible(false);
        when(repo.findById(any())).thenReturn(Optional.of(employee));

        assertNull(service.read(new EmployeeDTO()));
    }

    @Test
    void whenDeleteEmployeeThenTwoRepoMethodsInvoked() {
        var employeeDTO = new EmployeeDTO();
        employeeDTO.setId(1L);
        var employee = new Employee();
        when(repo.findById(any())).thenReturn(Optional.of(employee));
        service.delete(employeeDTO);

        verify(repo, times(1)).findById(1L);
        verify(repo, timeout(1)).save(employee);
    }

    @Test
    void findAll() {
        var employee1 = new Employee();
        var employee2 = new Employee();
        employee2.setVisible(false);
        when(repo.findAll()).thenReturn(List.of(employee1, employee2));
        assertEquals(service.findAll().size(), 1);
        assertEquals(service.findAll().get(0).getId(), employee1.getId());
    }

}
