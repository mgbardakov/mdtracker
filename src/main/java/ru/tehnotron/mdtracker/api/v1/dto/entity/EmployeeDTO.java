package ru.tehnotron.mdtracker.api.v1.dto.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.util.List;

@Getter
@Setter
@ToString
public class EmployeeDTO extends BaseDTO {
    private String name;
    private PositionDTO position;
    private List<DeviceDTO> devices;
}
