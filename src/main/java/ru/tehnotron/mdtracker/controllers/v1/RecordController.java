package ru.tehnotron.mdtracker.controllers.v1;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.tehnotron.mdtracker.api.v1.dto.entity.RecordDTO;
import ru.tehnotron.mdtracker.api.v1.dto.request.RecordRequestDTO;
import ru.tehnotron.mdtracker.service.RecordService;

import java.util.List;

@RestController
@RequestMapping("api/v1/records/")
public class RecordController {

    private final RecordService service;

    public RecordController(RecordService service) {
        this.service = service;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = "create", consumes = {"application/json"})
    public RecordDTO createRecord(@RequestBody RecordDTO recordDTO) {
        return service.create(recordDTO);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("{id}")
    public RecordDTO getRecord(@PathVariable long id) {
        var recordDTO = new RecordDTO();
        recordDTO.setId(id);
        return service.read(recordDTO);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("update")
    public void updateRecord(@RequestBody RecordDTO recordDTO) {
        service.update(recordDTO);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("delete")
    public void deleteRecord(@RequestBody RecordDTO recordDTO) {
        service.delete(recordDTO);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping()
    public List<RecordDTO> getAllRecords() {
        return service.findAll();
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping("filter")
    public List<RecordDTO> getRecordsByRequest(RecordRequestDTO recordRequestDTO) {
        return service.findRecordsByRequest(recordRequestDTO);
    }


}
