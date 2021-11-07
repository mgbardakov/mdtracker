package ru.tehnotron.mdtracker.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
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
    @NotNull
    private String name;
    @ManyToOne
    @JoinColumn(name = "position_id")
    @NotNull
    private Position position;
    @Column(name = "visible")
    @NotNull
    private boolean visible;
}
