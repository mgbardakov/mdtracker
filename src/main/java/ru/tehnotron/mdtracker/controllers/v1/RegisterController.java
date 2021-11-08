package ru.tehnotron.mdtracker.controllers.v1;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.RecordDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.UserDTO;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.security.jwt.JwtTokenProvider;
import ru.tehnotron.mdtracker.service.DeviceRegisterService;
import ru.tehnotron.mdtracker.service.RecordService;
import ru.tehnotron.mdtracker.service.UserService;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("api/v1/register/")
@PreAuthorize("hasAnyRole('ADMIN', 'USER')")
public class RegisterController {

    private final DeviceRegisterService service;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserService userService;
    private final RecordService recordService;

    public RegisterController(DeviceRegisterService service, JwtTokenProvider jwtTokenProvider, UserService userService, RecordService recordService) {
        this.service = service;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
        this.recordService = recordService;
    }

    @PostMapping
    public void registerDevices(HttpServletRequest req, @RequestBody Set<DeviceDTO> devices) {
        var user = getUserFromRequest(req);
        service.registerDevices(user, devices, new Date(System.currentTimeMillis()));
    }

    @PutMapping("close")
    public void closeRecord(@RequestBody RecordDTO recordDTO) {
        service.closeRecord(recordDTO, new Date(System.currentTimeMillis()));
    }

    @PutMapping("close-all")
    public void closeAllEmployeeRecords(HttpServletRequest req) {
        var user = getUserFromRequest(req);
        service.closeRecordsByEmployee(user.getEmployee(), new Date(System.currentTimeMillis()));
    }

    @GetMapping("active-records")
    public List<RecordDTO> getAllActiveRecordsForCurrentUser(HttpServletRequest req) {
        var user = getUserFromRequest(req);
        return recordService.getAllActiveRecordsByEmployee(user.getEmployee());

    }

    private UserDTO getUserFromRequest(HttpServletRequest req) {
        var token = jwtTokenProvider.resolveToken(req);
        var username = jwtTokenProvider.getUsername(token);
        return userService.findByUsername(username);
    }
}
