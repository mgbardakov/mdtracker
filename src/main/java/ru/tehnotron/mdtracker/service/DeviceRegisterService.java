package ru.tehnotron.mdtracker.service;

import ru.tehnotron.mdtracker.api.dto.DeviceDTO;
import ru.tehnotron.mdtracker.api.dto.EmployeeDTO;
import ru.tehnotron.mdtracker.api.dto.RecordDTO;


import java.util.Date;
import java.util.List;

public interface DeviceRegisterService {
    RecordDTO registerDevice(EmployeeDTO employeeDTO, DeviceDTO deviceDTO, Date takenDate);
    List<RecordDTO> registerDevices(EmployeeDTO employeeDTO, List<DeviceDTO> deviceDTOs, Date takenDate);
    void closeRecord(RecordDTO recordDTO, Date returnedDate);
    void closeRecordsByEmployee(EmployeeDTO employeeDTO, Date returnedDate);
}
