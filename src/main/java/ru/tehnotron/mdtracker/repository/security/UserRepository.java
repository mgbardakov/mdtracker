package ru.tehnotron.mdtracker.repository.security;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.tehnotron.mdtracker.domain.security.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
