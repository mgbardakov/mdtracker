package ru.tehnotron.mdtracker.service;

import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.RecordDTO;
import ru.tehnotron.mdtracker.api.v1.dto.request.RecordRequestDTO;

import java.util.Date;
import java.util.List;

public interface RecordService extends CrudService<RecordDTO> {
        List<RecordDTO> findRecordsInDateInterval(Date start, Date end);
        List<RecordDTO> findRecordsByDevice(DeviceDTO deviceDTO);
        List<RecordDTO> findRecordsByRequest(RecordRequestDTO req);
}
