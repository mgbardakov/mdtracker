package ru.tehnotron.mdtracker.service.jpa;

import org.junit.jupiter.api.*;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.exception.TakenException;
import ru.tehnotron.mdtracker.exception.VerificationException;
import ru.tehnotron.mdtracker.repository.DeviceRepository;
import ru.tehnotron.mdtracker.service.DeviceService;

import java.util.Date;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class JpaDeviceServiceTest {
//    DeviceService deviceService;
//
//    @Mock
//    DeviceRepository repository;
//
//    @BeforeEach
//    public void setUp() {
//        MockitoAnnotations.openMocks(this);
//        deviceService = new JpaDeviceService(repository);
//    }
//
//    @Test
//    public void whenValidDeviceThenNoExceptions() throws Exception {
//        var device = new Device();
//        device.setTaken(false);
//        device.setVerificationExpire(new Date(System.currentTimeMillis() + 1000000));
//        when(repository.findById(any())).thenReturn(Optional.of(device));
//        deviceService.validateDevice(device);
//        verify(repository, times(1)).findById(any());
//    }
//
//   @Test
//   public void whenTakenDeviceThenTakenException() {
//        var device = new Device();
//        device.setTaken(true);
//        device.setVerificationExpire(new Date(System.currentTimeMillis() + 1000000));
//        var employee = new Employee();
//        employee.setName("Vasya");
//        device.setEmployee(employee);
//        when(repository.findById(any())).thenReturn(Optional.of(device));
//        Assertions.assertThrows(TakenException.class,() -> deviceService.validateDevice(device));
//   }
//
//   @Test
//   public void whenExpiredThenVerificationException() {
//       var device = new Device();
//       device.setTaken(true);
//       device.setVerificationExpire(new Date(System.currentTimeMillis() - 1000000));
//       var employee = new Employee();
//       employee.setName("Vasya");
//       when(repository.findById(any())).thenReturn(Optional.of(device));
//       Assertions.assertThrows(VerificationException.class,() -> deviceService.validateDevice(device));
//   }
}