package ru.tehnotron.mdtracker.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.tehnotron.mdtracker.domain.Position;

@Repository
public interface PositionRepository extends CrudRepository<Position, Long> {
}
