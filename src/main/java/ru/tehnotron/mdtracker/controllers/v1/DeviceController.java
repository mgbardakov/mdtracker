package ru.tehnotron.mdtracker.controllers.v1;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.service.DeviceService;

import java.util.List;

@RestController
@RequestMapping("api/v1/devices/")
public class DeviceController {

    private final DeviceService service;

    public DeviceController(DeviceService service) {
        this.service = service;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("create")
    public DeviceDTO createDevice(@RequestBody DeviceDTO deviceDTO) {
        return service.create(deviceDTO);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping("{id}")
    public DeviceDTO getDevice(@PathVariable long id) {
        var deviceDTO = new DeviceDTO();
        deviceDTO.setId(id);
        return service.read(deviceDTO);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("update")
    public void updateDevice(@RequestBody DeviceDTO deviceDTO) {
        service.update(deviceDTO);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("delete")
    public void deleteDevice(@RequestBody DeviceDTO deviceDTO) {
        service.delete(deviceDTO);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping()
    public List<DeviceDTO> getAllDevices() {
        return service.findAll();
    }
}
