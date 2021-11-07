package ru.tehnotron.mdtracker.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "device_movement")
@Setter
@Getter
@ToString
public class Record extends BaseEntity {
    @Column(name = "taken")
    @Temporal(TemporalType.TIMESTAMP)
    @NotNull
    private Date taken;
    @Column(name = "returned")
    @Temporal(TemporalType.TIMESTAMP)
    private Date returned;
    @ManyToOne
    @JoinColumn(name = "device_id")
    @NotNull
    private Device device;
    @ManyToOne
    @JoinColumn(name = "employee_id")
    @NotNull
    private Employee employee;
}
