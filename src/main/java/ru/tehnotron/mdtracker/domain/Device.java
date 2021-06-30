package ru.tehnotron.mdtracker.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Device extends BaseEntity {
    @Column(name = "name")
    private String name;
    @Temporal(TemporalType.TIMESTAMP)
    private Date verificationExpire;
    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;
}
