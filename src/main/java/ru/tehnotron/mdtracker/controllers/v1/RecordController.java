package ru.tehnotron.mdtracker.controllers.v1;

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

    @PostMapping("create")
    public RecordDTO createRecord(@RequestBody RecordDTO recordDTO) {
        return service.create(recordDTO);
    }

    @GetMapping("{id}")
    public RecordDTO getRecord(@PathVariable long id) {
        var recordDTO = new RecordDTO();
        recordDTO.setId(id);
        return service.read(recordDTO);
    }

    @PutMapping("update")
    public void updateRecord(@RequestBody RecordDTO recordDTO) {
        service.update(recordDTO);
    }

    @PostMapping("delete")
    public void deleteRecord(@RequestBody RecordDTO recordDTO) {
        service.delete(recordDTO);
    }

    @GetMapping()
    public List<RecordDTO> getAllRecords() {
        return service.findAll();
    }

    @GetMapping("filter")
    public List<RecordDTO> getRecordsByRequest(RecordRequestDTO recordRequestDTO) {
        return service.findRecordsByRequest(recordRequestDTO);
    }


}
