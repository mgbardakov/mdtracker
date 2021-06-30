package ru.tehnotron.mdtracker.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.tehnotron.mdtracker.domain.Device;

@Repository
public interface DeviceRepository extends CrudRepository<Device, Long> {
}
