package ru.tehnotron.mdtracker.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "position")
@Getter
@Setter
@ToString
public class Position extends BaseEntity {

    public Position() {
        this.visible = true;
    }

    @Column(name = "name")
    private String name;
    @Column(name = "visible")
    private boolean visible;
}
