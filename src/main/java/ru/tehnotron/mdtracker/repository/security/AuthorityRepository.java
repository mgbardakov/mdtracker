package ru.tehnotron.mdtracker.repository.security;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.tehnotron.mdtracker.domain.security.Authority;

import java.util.Optional;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
    Optional<Authority> findAuthorityByRole(String role);
}
