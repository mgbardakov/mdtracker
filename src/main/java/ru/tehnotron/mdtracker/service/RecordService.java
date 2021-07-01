package ru.tehnotron.mdtracker.service;

import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Record;

import java.util.Date;
import java.util.List;

public interface RecordService extends CrudService<Record> {
        List<Record> findRecordsInDateInterval(Date start, Date end);
        List<Record> findRecordsByDevice(Device device);
}
