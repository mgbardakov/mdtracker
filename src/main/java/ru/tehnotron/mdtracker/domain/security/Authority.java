package ru.tehnotron.mdtracker.domain.security;

import lombok.*;
import ru.tehnotron.mdtracker.domain.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Authority extends BaseEntity {

   @NotNull
   private String role;

    @ManyToMany(mappedBy = "authorities")
    private Set<User> users = new HashSet<>();

    public void addUser(User user) {
        users.add(user);
    }

    public void removeUser(User user) {
        users.remove(user);
    }
}
