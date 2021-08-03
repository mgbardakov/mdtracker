package ru.tehnotron.mdtracker.api.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.util.List;

@Getter
@Setter
@ToString
public class EmployeeDTO extends BaseDTO {
    private String name;
    private PositionDTO positionDTO;
    private List<DeviceDTO> devices;
}
