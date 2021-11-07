package ru.tehnotron.mdtracker.api.v1.dto.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class RecordDTO extends BaseDTO {
    private long taken;
    private long returned;
    private DeviceDTO device;
    private EmployeeDTO employee;
}
