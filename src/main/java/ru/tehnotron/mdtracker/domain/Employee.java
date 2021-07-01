package ru.tehnotron.mdtracker.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
public class Employee extends BaseEntity {
    @Column(name = "name")
    private String name;
    @ManyToOne
    @JoinColumn(name = "position_id")
    private Position position;
    @OneToMany(mappedBy = "employee")
    private List<Device> devices = new ArrayList<>();

    public void addDevice(Device device) {
        device.setEmployee(this);
        devices.add(device);
    }

    public void removeDevice(Device device) {
        device.setEmployee(null);
        devices.remove(device);
    }

    public void clearAllDevices() {
        devices.forEach(x -> x.setEmployee(null));
        devices.clear();
    }
}
