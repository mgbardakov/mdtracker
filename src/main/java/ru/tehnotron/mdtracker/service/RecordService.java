package ru.tehnotron.mdtracker.service;

import ru.tehnotron.mdtracker.api.v1.dto.entity.BaseDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.RecordDTO;
import ru.tehnotron.mdtracker.api.v1.dto.request.RecordRequestDTO;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

public interface RecordService extends CrudService<RecordDTO> {
        List<RecordDTO> findRecordsByRequest(RecordRequestDTO req);
        List<RecordDTO> getAllActiveRecordsByEmployee(EmployeeDTO employeeDTO);
        Map<String, Set<? extends BaseDTO>> getEmployeesAndDevicesFromJournal();
        List<RecordDTO> getAllActiveRecords();
}
