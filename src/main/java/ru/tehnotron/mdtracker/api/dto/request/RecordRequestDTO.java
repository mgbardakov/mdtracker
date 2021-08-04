package ru.tehnotron.mdtracker.api.dto.request;

import lombok.Data;

import java.util.Date;

@Data
public class RecordRequestDTO {
    private Date startDate;
    private Date endDate;
    private String deviceId;
    private String employeeId;
}
