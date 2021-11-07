package ru.tehnotron.mdtracker.controllers.v1;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.RecordDTO;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.security.jwt.JwtTokenProvider;
import ru.tehnotron.mdtracker.service.DeviceRegisterService;
import ru.tehnotron.mdtracker.service.UserService;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.Set;

@RestController
@RequestMapping("api/v1/register/")
@PreAuthorize("hasAnyRole('ADMIN', 'USER')")
public class RegisterController {

    private final DeviceRegisterService service;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserService userService;

    public RegisterController(DeviceRegisterService service, JwtTokenProvider jwtTokenProvider, UserService userService) {
        this.service = service;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
    }

    @PutMapping
    public void registerDevices(HttpServletRequest req, @RequestBody Set<DeviceDTO> devices) {
        var token = jwtTokenProvider.resolveToken(req);
        Claims claims = (Claims) Jwts.parser().parse(token).getBody();
        var username = claims.getSubject();
        var user = userService.findByUsername(username);
        service.registerDevices(user, devices, new Date(System.currentTimeMillis()));
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
