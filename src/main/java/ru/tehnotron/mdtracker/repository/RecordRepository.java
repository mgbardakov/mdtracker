package ru.tehnotron.mdtracker.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.Record;

import java.util.Date;
import java.util.List;

@Repository
public interface RecordRepository extends CrudRepository<Record, Long> {
    @Query("select r from Record r where r.taken between ?1 AND ?2")
    List<Record> findRecordsBetweenDates(Date startDate, Date endDate);
    List<Record> findAllByDevice(Device device);
    List<Record> findAllByEmployee(Employee employee);
}
