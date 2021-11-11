package ru.tehnotron.mdtracker.service.jpa;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.RecordDTO;
import ru.tehnotron.mdtracker.api.v1.dto.request.RecordRequestDTO;
import ru.tehnotron.mdtracker.api.v1.mapper.DeviceMapper;
import ru.tehnotron.mdtracker.api.v1.mapper.RecordMapper;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.Record;
import ru.tehnotron.mdtracker.repository.DeviceRepository;
import ru.tehnotron.mdtracker.repository.EmployeeRepository;
import ru.tehnotron.mdtracker.repository.RecordRepository;
import ru.tehnotron.mdtracker.repository.specification.record.*;
import ru.tehnotron.mdtracker.service.RecordService;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class JpaRecordService implements RecordService {

    private final RecordRepository recordRepository;
    private final RecordMapper recordMapper;
    private final EmployeeRepository employeeRepository;
    private final DeviceRepository deviceRepository;

    public JpaRecordService(RecordRepository recordRepository, RecordMapper recordMapper, EmployeeRepository employeeRepository, DeviceRepository deviceRepository) {
        this.recordRepository = recordRepository;
        this.recordMapper = recordMapper;
        this.employeeRepository = employeeRepository;
        this.deviceRepository = deviceRepository;
    }

    @Override
    public RecordDTO create(RecordDTO recordDTO) {
        var record = recordMapper.recordDTOToRecord(recordDTO);
        deviceRepository.findById(recordDTO.getDevice().getId()).ifPresent(record::setDevice);
        employeeRepository.findById(recordDTO.getEmployee().getId()).ifPresent(record::setEmployee);
        return recordMapper.recordToRecordDTO(recordRepository.save(record));
    }

    @Override
    public RecordDTO read(RecordDTO recordDTO) {
        return recordMapper.recordToRecordDTO(recordRepository
                .findById(recordDTO.getId()).orElse(null));
    }

    @Override
    public void update(RecordDTO recordDTO) {
        recordRepository.findById(recordDTO.getId()).ifPresent(record -> {
            recordMapper.updateRecordFromDTO(recordDTO, record);
            deviceRepository.findById(recordDTO.getDevice().getId()).ifPresent(record::setDevice);
            employeeRepository.findById(recordDTO.getEmployee().getId()).ifPresent(record::setEmployee);
            recordRepository.save(record);
        });
   }

    @Override
    public void delete(RecordDTO recordDTO) {
        var record = recordMapper.recordDTOToRecord(recordDTO);
        deviceRepository.findById(record.getId()).ifPresent(device -> device.setTaken(false));
        recordRepository.delete(record);
    }

    @Override
    public List<RecordDTO> findAll() {
        var records = new ArrayList<Record>();
        recordRepository.findAll().forEach(records::add);
        return recordMapper.recordListToRecordDTOList(records);
    }

    @Override
    public List<RecordDTO> findRecordsByRequest(RecordRequestDTO req) {
        var specification = getSpecificationFromRequest(req);
        return recordMapper.recordListToRecordDTOList(recordRepository.findAll(specification));
    }

    @Override
    public List<RecordDTO> getAllActiveRecordsByEmployee(EmployeeDTO employeeDTO) {
        var employee = employeeRepository.findById(employeeDTO.getId()).orElse(null);
        return recordMapper.recordListToRecordDTOList(recordRepository.findAllByEmployeeAndReturned(employee, null));
    }


    private Specification<Record> getSpecificationFromRequest(RecordRequestDTO req) {
        var builder = new RecordSpecificationBuilder();
        if(req.getStartDate() != 0) {
            builder.addStartDateSpecification(new Date(req.getStartDate()));
        }
        if (req.getEndDate() != 0) {
            builder.addEndDateSpecification(new Date(req.getEndDate()));
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
