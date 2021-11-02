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

    public Employee() {
        this.visible = true;
    }

    @Column(name = "name")
    private String name;
    @ManyToOne
    @JoinColumn(name = "position_id")
    private Position position;
    @Column(name = "visible")
    private boolean visible;
}
