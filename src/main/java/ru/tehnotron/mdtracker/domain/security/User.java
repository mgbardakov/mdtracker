package ru.tehnotron.mdtracker.domain.security;

import lombok.*;
import ru.tehnotron.mdtracker.domain.BaseEntity;
import ru.tehnotron.mdtracker.domain.Employee;

import javax.persistence.*;
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
    private String username;
    private String password;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "employee_id")
    private Employee employee;

    @Singular
    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "user_authority",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_id", referencedColumnName = "id")})
    private Set<Authority> authorities;

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

}
