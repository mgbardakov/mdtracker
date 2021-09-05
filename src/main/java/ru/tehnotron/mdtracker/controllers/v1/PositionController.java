package ru.tehnotron.mdtracker.controllers.v1;

import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.tehnotron.mdtracker.api.v1.dto.entity.PositionDTO;
import ru.tehnotron.mdtracker.domain.Position;
import ru.tehnotron.mdtracker.service.PositionService;

import java.util.List;

@RestController
@RequestMapping("api/v1/positions/")
@PreAuthorize("hasRole('ADMIN')")
public class PositionController {

    private final PositionService service;

    public PositionController(PositionService service) {
        this.service = service;
    }

    @PostMapping("create")
    public PositionDTO createPosition(@RequestBody PositionDTO positionDTO) {
        return service.create(positionDTO);
    }

    @GetMapping("{id}")
    public PositionDTO getPosition(@PathVariable long id) {
        var positionDTO = new PositionDTO();
        positionDTO.setId(id);
        return service.read(positionDTO);
    }

    @PutMapping("update")
    public void updatePosition(@RequestBody PositionDTO positionDTO) {
        service.update(positionDTO);
    }

    @PostMapping("delete")
    public void deletePosition(@RequestBody PositionDTO positionDTO) {
        service.delete(positionDTO);
    }

    @GetMapping()
    public List<PositionDTO> getAllPositions() {
        return service.findAll();
    }
}
