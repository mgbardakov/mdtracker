package ru.tehnotron.mdtracker.api.v1.dto.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class PositionDTO extends BaseDTO {
    private String name;
}
