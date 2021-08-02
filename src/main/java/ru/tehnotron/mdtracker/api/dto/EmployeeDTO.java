package ru.tehnotron.mdtracker.api.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Position;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
public class EmployeeDTO {
    private String name;
    private PositionDTO positionDTO;
    private List<DeviceDTO> devices;
}
