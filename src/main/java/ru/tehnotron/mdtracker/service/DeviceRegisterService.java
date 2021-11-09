package ru.tehnotron.mdtracker.service;

import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.RecordDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.UserDTO;


import java.util.Date;
import java.util.List;
import java.util.Set;

public interface DeviceRegisterService {
    List<RecordDTO> registerDevices(UserDTO userDTO, Set<DeviceDTO> devices, Date takenDate);
    RecordDTO closeRecord(RecordDTO recordDTO, Date returnedDate);
    void closeRecordsByEmployee(EmployeeDTO employeeDTO, Date returnedDate);
}
