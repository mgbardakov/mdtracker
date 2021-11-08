package ru.tehnotron.mdtracker.service;

import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.RecordDTO;
import ru.tehnotron.mdtracker.api.v1.dto.request.RecordRequestDTO;

import java.util.Date;
import java.util.List;

public interface RecordService extends CrudService<RecordDTO> {
        List<RecordDTO> findRecordsByRequest(RecordRequestDTO req);
        List<RecordDTO> getAllActiveRecordsByEmployee(EmployeeDTO employeeDTO);
}
