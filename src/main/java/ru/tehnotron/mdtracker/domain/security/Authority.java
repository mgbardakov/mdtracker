package ru.tehnotron.mdtracker.domain.security;

import lombok.*;
import ru.tehnotron.mdtracker.domain.BaseEntity;

import javax.persistence.*;
import java.util.Set;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Authority extends BaseEntity {

   private String role;

    @ManyToMany(mappedBy = "authorities")
    private Set<User> users;
}
