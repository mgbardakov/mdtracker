package ru.tehnotron.mdtracker.api.dto.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Setter
@Getter
@ToString
public class DeviceDTO extends BaseDTO {
    private String name;
    private Date verificationExpire;
    private boolean taken;
}
