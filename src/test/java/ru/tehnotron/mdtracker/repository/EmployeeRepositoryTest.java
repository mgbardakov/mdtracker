package ru.tehnotron.mdtracker.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class EmployeeRepositoryTest {
    @Autowired
    EmployeeRepository repository;

    @Test
    public void whenReadEmployee1WithFetchedDevices() {
        var device1 = new Device();
        var device3 = new Device();
        var device4 = new Device();
        device1.setId(1L);
        device3.setId(3L);
        device4.setId(4L);
        var expectedList = List.of(device1, device3, device4);

        assertEquals(expectedList, repository.findEmployeeWithFetchedDevices(1L).getDevices());
    }

    @Test
    public void whenReadAllEmployeesWithFetchedDevices() {
        var device1 = new Device();
        var device3 = new Device();
        var device4 = new Device();
        device1.setId(1L);
        device3.setId(3L);
        device4.setId(4L);
        var expectedList1 = List.of(device1, device3, device4);

        var device2 = new Device();
        device2.setId(2L);
        var expectedList2 = List.of(device2);

        var employees = repository.findAllEmployeesWithFetchedDevices();

        assertEquals(expectedList1, employees.get(0).getDevices());
        assertEquals(expectedList2, employees.get(1).getDevices());
    }

}
