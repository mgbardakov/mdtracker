package ru.tehnotron.mdtracker.service.jpa;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.RecordDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.UserDTO;
import ru.tehnotron.mdtracker.api.v1.mapper.DeviceMapper;
import ru.tehnotron.mdtracker.api.v1.mapper.EmployeeMapper;
import ru.tehnotron.mdtracker.api.v1.mapper.RecordMapper;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.Record;
import ru.tehnotron.mdtracker.repository.DeviceRepository;
import ru.tehnotron.mdtracker.repository.EmployeeRepository;
import ru.tehnotron.mdtracker.repository.RecordRepository;
import ru.tehnotron.mdtracker.service.DeviceRegisterService;

import java.util.List;
import java.util.Optional;
import java.util.Set;

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
                employeeRepository, deviceRepository, RecordMapper.INSTANCE,
                EmployeeMapper.INSTANCE, DeviceMapper.INSTANCE);
    }

    @Test
    public void whenRegisterDevices() {
        var userDTO  = new UserDTO();
        userDTO.setId(1L);
        var employeeDTO = new EmployeeDTO();
        employeeDTO.setId(1L);
        var deviceDTO = new DeviceDTO();
        deviceDTO.setId(1L);
        var deviceDTOs = Set.of(deviceDTO);
        userDTO.setEmployee(employeeDTO);
        var employee = new Employee();
        employee.setId(1L);
        var device = new Device();
        deviceDTO.setId(1L);


        when(employeeRepository.findById(any())).thenReturn(Optional.of(employee));
        when(deviceRepository.findById(any())).thenReturn(Optional.of(device));

        service.registerDevices(userDTO, deviceDTOs, any());

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
        var record = new Record();
        record.setId(1L);
        record.setEmployee(employee);
        record.setDevice(device);

        var recordDTO = new RecordDTO();
        recordDTO.setId(1L);

        when(recordRepository.findById(any())).thenReturn(Optional.of(record));
        when(employeeRepository.findById(any())).thenReturn(Optional.of(employee));

        service.closeRecord(recordDTO, any());

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
        var record = new Record();
        record.setId(1L);
        record.setEmployee(employee);
        record.setDevice(device);
        var record2 = new Record();
        record.setId(2L);
        record.setEmployee(employee);
        record.setDevice(device2);
        var records = List.of(record, record2);

        var employeeDTO = new EmployeeDTO();
        employeeDTO.setId(1L);

        when(employeeRepository.findById(any())).thenReturn(Optional.of(employee));
        when(recordRepository.findAllByEmployee(employee)).thenReturn(records);

        service.closeRecordsByEmployee(employeeDTO, any());

        verify(recordRepository, times(1)).findAllByEmployee(any());
        verify(employeeRepository, times(1)).save(any());
        verify(recordRepository, times(2)).save(any());
    }
}
