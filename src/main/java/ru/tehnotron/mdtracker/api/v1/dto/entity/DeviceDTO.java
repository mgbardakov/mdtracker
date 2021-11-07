package ru.tehnotron.mdtracker.api.v1.dto.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Setter
@Getter
@ToString
public class DeviceDTO extends BaseDTO {
    private String name;
    private long verificationExpire;
    private boolean taken;
    private String serialNumber;
}
