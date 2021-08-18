package ru.tehnotron.mdtracker.service.jpa;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.RecordDTO;
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

    @Override
    public RecordDTO registerDevice(EmployeeDTO employeeDTO, DeviceDTO deviceDTO, Date takenDate) {
        var employee = employeeMapper.employeeDTOToEmployee(employeeDTO);
        var device = deviceMapper.deviceDTOToDevice(deviceDTO);
        var savedEmployee = employeeRepository
                .findById(employee.getId()).orElse(null);
        var savedDevice = deviceRepository
                .findById(device.getId()).orElse(null);
        if (savedEmployee == null || savedDevice == null) {
            return null;
        }
        savedEmployee.addDevice(device);
        var record = new Record();
        record.setEmployee(savedEmployee);
        record.setDevice(savedDevice);
        record.setTaken(takenDate);
        return recordMapper.recordToRecordDTO(recordRepository.save(record));
    }

    @Override
    public List<RecordDTO> registerDevices(EmployeeDTO employeeDTO, List<DeviceDTO> deviceDTOs, Date takenDate) {
        var recordList = new ArrayList<Record>();
        deviceDTOs.forEach(x -> {
            recordList.add(recordMapper.recordDTOToRecord(registerDevice(
                    employeeDTO, x, takenDate)));
        });
        return recordMapper.recordListToRecordDTOList(recordList);
    }

    @Override
    public void closeRecord(RecordDTO recordDTO, Date returnedDate) {
        var record = recordMapper.recordDTOToRecord(recordDTO);
        var savedRecord = recordRepository.findById(record.getId()).orElse(null);
        if (savedRecord != null) {
            savedRecord.setReturned(returnedDate);
            var employee = savedRecord.getEmployee();
            employee.removeDevice(savedRecord.getDevice());
            employeeRepository.save(employee);
        }
    }

    @Override
    public void closeRecordsByEmployee(EmployeeDTO employeeDTO, Date returnedDate) {
        var employee = employeeMapper.employeeDTOToEmployee(employeeDTO);
        var savedEmployee = employeeRepository
                .findById(employee.getId()).orElse(null);
        if(savedEmployee != null) {
            savedEmployee.clearAllDevices();
            employeeRepository.save(savedEmployee);
        }
        var recordList = recordRepository.findAllByEmployee(savedEmployee);
        recordList.forEach(record -> {
            record.setReturned(returnedDate);
            recordRepository.save(record);
        });
    }
}
