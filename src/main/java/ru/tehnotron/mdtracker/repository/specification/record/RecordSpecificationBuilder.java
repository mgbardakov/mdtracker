package ru.tehnotron.mdtracker.repository.specification.record;

import org.springframework.data.jpa.domain.Specification;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.Record;

import java.util.Date;

public class RecordSpecificationBuilder {

    private Specification<Record> newSpecification;

    public RecordSpecificationBuilder() {
        this.newSpecification = (root, query, builder) -> builder.equal(root, root);
    }

    public RecordSpecificationBuilder addStartDateSpecification(Date date) {
       newSpecification = Specification.where(newSpecification).and(new RecordStartDateSpecification(date));
        return this;
    }

    public RecordSpecificationBuilder addEndDateSpecification(Date date) {
        newSpecification = Specification.where(newSpecification).and(new RecordEndDateSpecification(date));
        return this;
    }

    public RecordSpecificationBuilder addDeviceSpecification(Device device) {
        newSpecification = Specification.where(newSpecification).and(new RecordDeviceSpecification(device));
        return this;
    }

    public RecordSpecificationBuilder addEmployeeSpecification(Employee employee) {
        newSpecification = Specification.where(newSpecification).and(new RecordEmployeeSpecification(employee));
        return this;
    }

    public Specification<Record> build() {
        return newSpecification;
    }

}
