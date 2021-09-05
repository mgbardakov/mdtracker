package ru.tehnotron.mdtracker.controllers.v1;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.RecordDTO;
import ru.tehnotron.mdtracker.service.DeviceRegisterService;

import java.util.Date;

@RestController
@RequestMapping("api/v1/register/")
@PreAuthorize("hasAnyRole('ADMIN', 'USER')")
public class RegisterController {

    private final DeviceRegisterService service;

    public RegisterController(DeviceRegisterService service) {
        this.service = service;
    }

    @PutMapping
    public void registerDevices(@RequestBody EmployeeDTO employeeDTO) {
        service.registerDevices(employeeDTO, new Date(System.currentTimeMillis()));
    }

    @PutMapping("close")
    public void closeRecord(@RequestBody RecordDTO recordDTO) {
        service.closeRecord(recordDTO, new Date(System.currentTimeMillis()));
    }

    @PutMapping("close-all")
    public void closeAllEmployeeRecords(@RequestBody EmployeeDTO employeeDTO) {
        service.closeRecordsByEmployee(employeeDTO, new Date(System.currentTimeMillis()));
    }
}
