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

    public Device() {
        this.visible = true;
        this.taken = false;
    }

    @Column(name = "name")
    private String name;
    @Column(name = "serial_number")
    private String serialNumber;
    @Temporal(TemporalType.TIMESTAMP)
    private Date verificationExpire;
    @Column(name = "taken")
    private boolean taken;
    @Column(name = "visible")
    private boolean visible;
    @ManyToOne
    @JoinColumn(name = "employee_id")
    @ToString.Exclude
    private Employee employee;
}
