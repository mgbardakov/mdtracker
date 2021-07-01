package ru.tehnotron.mdtracker.service.jpa;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Record;
import ru.tehnotron.mdtracker.repository.RecordRepository;
import ru.tehnotron.mdtracker.service.RecordService;

import java.util.Date;
import java.util.List;

@Service
@Transactional
public class JpaRecordService extends JpaCrudService<Record, RecordRepository> implements RecordService {
    public JpaRecordService(RecordRepository repository) {
        super(repository);
    }

    @Override
    public List<Record> findRecordsInDateInterval(Date start, Date end) {
        return repository.findRecordsBetweenDates(start, end);
    }

    @Override
    public List<Record> findRecordsByDevice(Device device) {
        return repository.findAllByDevice(device);
    }
}
