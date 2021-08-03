package ru.tehnotron.mdtracker.api.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class RecordDTO extends BaseDTO {
    private String taken;
    private String returned;
    private DeviceDTO deviceDTO;
    private EmployeeDTO employeeDTO;
}
