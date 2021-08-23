package ru.tehnotron.mdtracker.service.jpa;

import org.junit.jupiter.api.*;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.v1.mapper.DeviceMapper;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.exception.TakenException;
import ru.tehnotron.mdtracker.exception.VerificationException;
import ru.tehnotron.mdtracker.repository.DeviceRepository;
import ru.tehnotron.mdtracker.service.DeviceService;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class JpaDeviceServiceTest {
    DeviceService service;

    @Mock
    DeviceRepository repo;


    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        service = new JpaDeviceService(repo, DeviceMapper.INSTANCE);
    }

    @Test
    public void whenValidDeviceThenNoExceptions() throws Exception {
        var expireDate = new Date(System.currentTimeMillis() + 1000000);
        var deviceDTO = new DeviceDTO();
        deviceDTO.setTaken(false);
        deviceDTO.setVerificationExpire(expireDate);
        var device = new Device();
        device.setTaken(false);
        device.setVerificationExpire(expireDate);
        when(repo.findById(any())).thenReturn(Optional.of(device));
        service.validateDevice(deviceDTO);
        verify(repo, times(1)).findById(any());
    }

   @Test
   public void whenTakenDeviceThenTakenException() {
       var employee = new Employee();
       employee.setName("Vasya");
       var expireDate = new Date(System.currentTimeMillis() + 1000000);
       var deviceDTO = new DeviceDTO();
       deviceDTO.setTaken(true);
       deviceDTO.setVerificationExpire(expireDate);
       deviceDTO.setName("Vasya");
       var device = new Device();
       device.setTaken(true);
       device.setVerificationExpire(expireDate);
       device.setEmployee(employee);
       when(repo.findById(any())).thenReturn(Optional.of(device));
       Assertions.assertThrows(TakenException.class,() -> service.validateDevice(deviceDTO));
   }

   @Test
   public void whenExpiredThenVerificationException() {
       var employee = new Employee();
       employee.setName("Vasya");
       var expireDate = new Date(System.currentTimeMillis() - 1000000);
       var deviceDTO = new DeviceDTO();
       deviceDTO.setTaken(false);
       deviceDTO.setVerificationExpire(expireDate);
       deviceDTO.setName("Vasya");
       var device = new Device();
       device.setTaken(false);
       device.setVerificationExpire(expireDate);
       device.setEmployee(employee);
       when(repo.findById(any())).thenReturn(Optional.of(device));
       Assertions.assertThrows(VerificationException.class,() -> service.validateDevice(deviceDTO));
   }

    @Test
    void whenReadVisibleDeviceThenOneFounded() {
        var device = new Device();
        device.setId(1L);
        when(repo.findById(any())).thenReturn(Optional.of(device));

        assertEquals(service.read(new DeviceDTO()).getId(), device.getId());
    }

    @Test
    void whenReadInvisibleDeviceThenNullFounded() {
        var device = new Device();
        device.setVisible(false);
        when(repo.findById(any())).thenReturn(Optional.of(device));

        assertNull(service.read(new DeviceDTO()));
    }

    @Test
    void whenDeleteEmployeeThenTwoRepoMethodsInvoked() {
        var deviceDTO = new DeviceDTO();
        deviceDTO.setId(1L);
        var device = new Device();
        when(repo.findById(any())).thenReturn(Optional.of(device));
        service.delete(deviceDTO);

        verify(repo, times(1)).findById(1L);
        verify(repo, timeout(1)).save(device);
    }

    @Test
    void findAll() {
        var device1 = new Device();
        var device2 = new Device();
        device2.setVisible(false);
        when(repo.findAll()).thenReturn(List.of(device1, device2));
        assertEquals(service.findAll().size(), 1);
        assertEquals(service.findAll().get(0).getId(), device1.getId());
    }
}
