package ru.tehnotron.mdtracker.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
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
    @NotNull
    private String name;
    @Column(name = "serial_number")
    @NotNull
    private String serialNumber;
    @Temporal(TemporalType.TIMESTAMP)
    @NotNull
    private Date verificationExpire;
    @Column(name = "taken")
    @NotNull
    private boolean taken;
    @Column(name = "visible")
    @NotNull
    private boolean visible;

    public boolean isExpired() {
        return verificationExpire.getTime() - System.currentTimeMillis() < 0;
    }
}
