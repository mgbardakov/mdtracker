package ru.tehnotron.mdtracker.repository.specification.record;

import org.springframework.data.jpa.domain.Specification;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.Record;

import java.util.Date;

public class RecordSpecificationBuilder {

    private final Specification<Record> INSTANCE = (root, query, builder) -> builder.and();

    public RecordSpecificationBuilder addStartDateSpecification(Date date) {
       INSTANCE.and(new RecordStartDateSpecification(date));
        return this;
    }

    public RecordSpecificationBuilder addEndDateSpecification(Date date) {
        INSTANCE.and(new RecordEndDateSpecification(date));
        return this;
    }

    public RecordSpecificationBuilder addDeviceSpecification(Device device) {
        INSTANCE.and(new RecordDeviceSpecification(device));
        return this;
    }

    public RecordSpecificationBuilder addEmployeeSpecification(Employee employee) {
        INSTANCE.and(new RecordEmployeeSpecification(employee));
        return this;
    }

    public Specification<Record> build() {
        return INSTANCE;
    }

}
