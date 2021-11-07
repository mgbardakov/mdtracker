package ru.tehnotron.mdtracker.domain.security;

import lombok.*;
import ru.tehnotron.mdtracker.domain.BaseEntity;
import ru.tehnotron.mdtracker.domain.Employee;

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
@Table(name = "users")
public class User extends BaseEntity {

    @Column(name = "user_name")
    @NotNull
    private String username;
    @NotNull
    private String password;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "employee_id")
    private Employee employee;

    @Singular
    @ManyToMany()
    @JoinTable(name = "user_authority",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_id", referencedColumnName = "id")})
    private Set<Authority> authorities = new HashSet<>();

    @Builder.Default
    @Column(name = "account_non_expired")
    private Boolean accountNonExpired = true;

    @Builder.Default
    @Column(name = "account_non_locked")
    private Boolean accountNonLocked = true;

    @Builder.Default
    @Column(name = "credentials_non_expired")
    private Boolean credentialsNonExpired = true;

    @Builder.Default
    private Boolean enabled = true;

    public void addAuthority(Authority authority) {
        authorities.add(authority);
        authority.addUser(this);
    }

    public void clearAuthorities() {
        authorities.forEach(authority -> authority.removeUser(this));
        authorities.clear();
    }

}
