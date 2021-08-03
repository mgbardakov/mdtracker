package ru.tehnotron.mdtracker.service;

import ru.tehnotron.mdtracker.api.dto.DeviceDTO;
import ru.tehnotron.mdtracker.api.dto.RecordDTO;

import java.util.Date;
import java.util.List;

public interface RecordService extends CrudService<RecordDTO> {
        List<RecordDTO> findRecordsInDateInterval(Date start, Date end);
        List<RecordDTO> findRecordsByDevice(DeviceDTO deviceDTO);
}
