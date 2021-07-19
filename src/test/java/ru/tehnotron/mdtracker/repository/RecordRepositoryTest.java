package ru.tehnotron.mdtracker.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.Record;


import java.text.SimpleDateFormat;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class RecordRepositoryTest {
    @Autowired
    RecordRepository repository;

    @Test
    public void whenThreeRecordsFoundedByDevice1() {
        var device = new Device();
        device.setId(1L);
        var record1 = new Record();
        record1.setId(1L);
        var record3 = new Record();
        record3.setId(3L);
        var record5 = new Record();
        record5.setId(5L);
        var expectedList = List.of(record1, record3, record5);
        assertEquals(expectedList, repository.findAllByDevice(device));
    }

    @Test
    public void whenRecords1And2FoundedInJanuary() throws Exception {
        var sdf = new SimpleDateFormat();
        sdf.applyPattern("yyyy-MM-dd");
        var startDate = sdf.parse("2021-01-01");
        var endDate = sdf.parse("2021-01-30");
        var record1 = new Record();
        record1.setId(1L);
        var record2 = new Record();
        record2.setId(2L);
        var expectedList = List.of(record1, record2);
        assertEquals(expectedList, repository.findRecordsBetweenDates(startDate, endDate));
    }

    @Test
    public void whenThreeRecordsFoundedByEmployee1() {
        var record1 = new Record();
        var record2 = new Record();
        var record3 = new Record();
        var record5 = new Record();
        var record6 = new Record();
        var record7 = new Record();

        record1.setId(1L);
        record2.setId(2L);
        record3.setId(3L);
        record5.setId(5L);
        record6.setId(6L);
        record7.setId(7L);

        var expectedList = List.of(record1, record2, record3,
                record5, record6, record7);

        var employee = new Employee();
        employee.setId(1L);

        assertEquals(expectedList, repository.findAllByEmployee(employee));
    }
}
