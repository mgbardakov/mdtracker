package ru.tehnotron.mdtracker.api.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class DeviceDTO extends BaseDTO {
    private String name;
    private String verificationExpire;
    private String taken;
}
