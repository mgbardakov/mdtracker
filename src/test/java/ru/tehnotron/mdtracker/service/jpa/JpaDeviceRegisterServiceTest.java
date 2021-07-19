package ru.tehnotron.mdtracker.service.jpa;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.Record;
import ru.tehnotron.mdtracker.repository.DeviceRepository;
import ru.tehnotron.mdtracker.repository.EmployeeRepository;
import ru.tehnotron.mdtracker.repository.RecordRepository;
import ru.tehnotron.mdtracker.service.DeviceRegisterService;

import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class JpaDeviceRegisterServiceTest {
    @Mock
    RecordRepository recordRepository;
    @Mock
    EmployeeRepository employeeRepository;
    @Mock
    DeviceRepository deviceRepository;

    DeviceRegisterService service;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        service = new JpaDeviceRegisterService(recordRepository,
                employeeRepository, deviceRepository);
    }

    @Test
    public void whenRegisterDevice() {
        var employee = new Employee();
        employee.setId(1L);
        var device = new Device();
        device.setId(1L);

        when(employeeRepository.findById(any())).thenReturn(Optional.of(employee));
        when(deviceRepository.findById(any())).thenReturn(Optional.of(device));

        service.registerDevice(employee, device, any());

        verify(employeeRepository, times(1)).findById(any());
        verify(deviceRepository, times(1)).findById(any());
        verify(recordRepository, times(1)).save(any());
    }

    @Test
    public void whenClosingRecord() {
        var device = new Device();
        device.setId(1L);
        var device2 = new Device();
        device.setId(2L);
        var employee = new Employee();
        employee.setId(1L);
        employee.addDevice(device);
        employee.addDevice(device2);
        var record = new Record();
        record.setId(1L);
        record.setEmployee(employee);
        record.setDevice(device);

        when(recordRepository.findById(any())).thenReturn(Optional.of(record));
        when(employeeRepository.findById(any())).thenReturn(Optional.of(employee));

        service.closeRecord(record, any());

        verify(recordRepository, times(1)).findById(any());
        verify(employeeRepository, times(1)).save(any());
    }

    @Test
    public void whenClosingAllEmployeeRecords() {
        var device = new Device();
        device.setId(1L);
        var device2 = new Device();
        device2.setId(2L);
        var employee = new Employee();
        employee.setId(1L);
        employee.addDevice(device);
        employee.addDevice(device2);
        var record = new Record();
        record.setId(1L);
        record.setEmployee(employee);
        record.setDevice(device);
        var record2 = new Record();
        record.setId(2L);
        record.setEmployee(employee);
        record.setDevice(device2);
        var records = List.of(record, record2);

        when(employeeRepository.findById(any())).thenReturn(Optional.of(employee));
        when(recordRepository.findAllByEmployee(employee)).thenReturn(records);

        service.closeRecordsByEmployee(employee, any());

        verify(recordRepository, times(1)).findAllByEmployee(any());
        verify(employeeRepository, times(1)).save(any());
        verify(recordRepository, times(2)).save(any());
    }
}