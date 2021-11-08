package ru.tehnotron.mdtracker.service.jpa;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;
import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.RecordDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.UserDTO;
import ru.tehnotron.mdtracker.api.v1.mapper.DeviceMapper;
import ru.tehnotron.mdtracker.api.v1.mapper.EmployeeMapper;
import ru.tehnotron.mdtracker.api.v1.mapper.RecordMapper;
import ru.tehnotron.mdtracker.domain.Record;
import ru.tehnotron.mdtracker.repository.DeviceRepository;
import ru.tehnotron.mdtracker.repository.EmployeeRepository;
import ru.tehnotron.mdtracker.repository.RecordRepository;
import ru.tehnotron.mdtracker.service.DeviceRegisterService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Service
@Transactional
public class JpaDeviceRegisterService implements DeviceRegisterService {

    private final RecordRepository recordRepository;
    private final EmployeeRepository employeeRepository;
    private final DeviceRepository deviceRepository;
    private final RecordMapper recordMapper;
    private final EmployeeMapper employeeMapper;
    private final DeviceMapper deviceMapper;

    public JpaDeviceRegisterService(RecordRepository recordRepository,
                                    EmployeeRepository employeeRepository,
                                    DeviceRepository deviceRepository,
                                    RecordMapper recordMapper,
                                    EmployeeMapper employeeMapper,
                                    DeviceMapper deviceMapper) {
        this.recordRepository = recordRepository;
        this.employeeRepository = employeeRepository;
        this.deviceRepository = deviceRepository;
        this.recordMapper = recordMapper;
        this.employeeMapper = employeeMapper;
        this.deviceMapper = deviceMapper;
    }

    private RecordDTO registerDevice(EmployeeDTO employeeDTO, DeviceDTO deviceDTO, Date takenDate) {
        var record = new Record();
        employeeRepository.findById(employeeDTO.getId()).ifPresent(record::setEmployee);
        deviceRepository.findById(deviceDTO.getId()).ifPresent(device -> {
            device.setTaken(true);
            record.setDevice(device);
        });
        record.setTaken(takenDate);
        if (record.getDevice() == null || record.getEmployee() == null || takenDate == null) {
            return null;
        }
        return recordMapper.recordToRecordDTO(recordRepository.save(record));
    }

    @Override
    public List<RecordDTO> registerDevices(UserDTO userDTO, Set<DeviceDTO> devices, Date takenDate) {
        devices.forEach(device -> {
            if (device.isTaken() ||
               (device.getVerificationExpire() - System.currentTimeMillis()) < 0) {
               throw new ResponseStatusException(HttpStatus.UNPROCESSABLE_ENTITY);
            }
        });
        var recordList = new ArrayList<Record>();
        devices.forEach(x -> {
            recordList.add(recordMapper.recordDTOToRecord(registerDevice(
                    userDTO.getEmployee(), x, takenDate)));
        });
        return recordMapper.recordListToRecordDTOList(recordList);
    }

    @Override
    public void closeRecord(RecordDTO recordDTO, Date returnedDate) {
        recordRepository.findById(recordDTO.getId()).ifPresent(record -> {
            record.setReturned(returnedDate);
            record.getDevice().setTaken(false);
        });
    }

    @Override
    public void closeRecordsByEmployee(EmployeeDTO employeeDTO, Date returnedDate) {
        var employee = employeeMapper.employeeDTOToEmployee(employeeDTO);
        var savedEmployee = employeeRepository
                .findById(employee.getId()).orElse(null);
        var recordList = recordRepository.findAllByEmployeeAndReturned(savedEmployee, null);
        recordList.forEach(record -> {
            record.setReturned(returnedDate);
            record.getDevice().setTaken(false);
        });
    }
}
