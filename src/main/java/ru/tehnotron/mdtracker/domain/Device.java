package ru.tehnotron.mdtracker.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Setter
@Getter
@ToString
public class Device extends BaseEntity {
    @Column(name = "name")
    private String name;
    @Temporal(TemporalType.TIMESTAMP)
    private Date verificationExpire;
    @Column(name = "taken")
    private boolean taken;
    @ManyToOne
    @JoinColumn(name = "employee_id")
    @ToString.Exclude
    private Employee employee;
}
