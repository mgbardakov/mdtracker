package ru.tehnotron.mdtracker.service.jpa;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.tehnotron.mdtracker.api.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.dto.entity.RecordDTO;
import ru.tehnotron.mdtracker.api.dto.request.RecordRequestDTO;
import ru.tehnotron.mdtracker.api.mapper.DeviceMapper;
import ru.tehnotron.mdtracker.api.mapper.RecordMapper;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.Record;
import ru.tehnotron.mdtracker.repository.RecordRepository;
import ru.tehnotron.mdtracker.repository.specification.record.*;
import ru.tehnotron.mdtracker.service.RecordService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class JpaRecordService implements RecordService {

    private final RecordRepository repository;
    private final RecordMapper recordMapper;
    private final DeviceMapper deviceMapper;

    public JpaRecordService(RecordRepository repository,
                            RecordMapper recordMapper,
                            DeviceMapper deviceMapper) {
        this.repository = repository;
        this.recordMapper = recordMapper;
        this.deviceMapper = deviceMapper;
    }

    @Override
    public List<RecordDTO> findRecordsByDevice(DeviceDTO deviceDTO) {
        var device = deviceMapper.deviceDTOToDevice(deviceDTO);
        return recordMapper.recordListToRecordDTOList(repository.findAllByDevice(device));
    }

    @Override
    public List<RecordDTO> findRecordsInDateInterval(Date start, Date end) {
        return recordMapper.recordListToRecordDTOList(repository
                .findRecordsBetweenDates(start, end));
    }

    @Override
    public RecordDTO create(RecordDTO recordDTO) {
        var record = recordMapper.recordDTOToRecord(recordDTO);
        return recordMapper.recordToRecordDTO(repository.save(record));
    }

    @Override
    public RecordDTO read(RecordDTO recordDTO) {
        return recordMapper.recordToRecordDTO(repository
                .findById(recordDTO.getId()).orElse(null));
    }

    @Override
    public void update(RecordDTO recordDTO) {
        var record = recordMapper.recordDTOToRecord(recordDTO);
        repository.save(record);
    }

    @Override
    public void delete(RecordDTO recordDTO) {
        var record = recordMapper.recordDTOToRecord(recordDTO);
        repository.delete(record);
    }

    @Override
    public List<RecordDTO> findAll() {
        var records = new ArrayList<Record>();
        repository.findAll().forEach(records::add);
        return recordMapper.recordListToRecordDTOList(records);
    }

    @Override
    public List<RecordDTO> findRecordsByRequest(RecordRequestDTO req) {
        var specification = getSpecificationFromRequest(req);
        return recordMapper.recordListToRecordDTOList(repository.findAll(specification));
    }

    private Specification<Record> getSpecificationFromRequest(RecordRequestDTO req) {
        var builder = new RecordSpecificationBuilder();
        if(req.getStartDate() != null) {
            builder.addStartDateSpecification(req.getStartDate());
        }
        if (req.getEndDate() != null) {
            builder.addEndDateSpecification(req.getEndDate());
        }
        if (req.getDeviceId() != null) {
            var device = new Device();
            device.setId(Long.parseLong(req.getDeviceId()));
            builder.addDeviceSpecification(device);
        }
        if (req.getEmployeeId() != null) {
            var employee = new Employee();
            employee.setId(Long.parseLong(req.getEmployeeId()));
            builder.addEmployeeSpecification(employee);
        }
        return builder.build();
    }
}
