package ru.tehnotron.mdtracker.service.jpa;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;
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

    public JpaDeviceRegisterService(RecordRepository recordRepository,
                                    EmployeeRepository employeeRepository,
                                    DeviceRepository deviceRepository) {
        this.recordRepository = recordRepository;
        this.employeeRepository = employeeRepository;
        this.deviceRepository = deviceRepository;
    }

    @Override
    public Record registerDevice(Employee employee, Device device, Date takenDate) {
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
        return recordRepository.save(record);
    }

    @Override
    public void closeRecord(Record record, Date returnedDate) {
        var savedRecord = recordRepository.findById(record.getId()).orElse(null);
        if (savedRecord != null) {
            savedRecord.setReturned(returnedDate);
            var employee = savedRecord.getEmployee();
            employee.removeDevice(savedRecord.getDevice());
            employeeRepository.save(employee);
        }
    }

    @Override
    public List<Record> registerDevices(Employee employee, List<Device> devices,
                                        Date takenDate) {
        var recordList = new ArrayList<Record>();
        devices.forEach(x -> {
            recordList.add(registerDevice(employee, x, takenDate));
        });
        return recordList;
    }

    @Override
    public void closeRecordsByEmployee(Employee employee, Date returnedDate) {
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
