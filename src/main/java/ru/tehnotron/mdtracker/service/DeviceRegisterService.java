package ru.tehnotron.mdtracker.service;

import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.Record;

import java.util.Date;
import java.util.List;

public interface DeviceRegisterService {
    Record registerDevice(Employee employee, Device device, Date takenDate);
    List<Record> registerDevices(Employee employee, List<Device> devices, Date takenDate);
    void closeRecord(Record record, Date returnedDate);
    void closeRecordsByEmployee(Employee employee, Date returnedDate);
}
