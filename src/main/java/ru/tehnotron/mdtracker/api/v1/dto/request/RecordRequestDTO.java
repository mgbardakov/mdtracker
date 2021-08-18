package ru.tehnotron.mdtracker.api.v1.dto.request;

import lombok.Data;

import java.util.Date;

@Data
public class RecordRequestDTO {
    private Date startDate;
    private Date endDate;
    private String deviceId;
    private String employeeId;
}
