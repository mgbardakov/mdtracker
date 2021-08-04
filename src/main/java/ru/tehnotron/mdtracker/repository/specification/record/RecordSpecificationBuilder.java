package ru.tehnotron.mdtracker.repository.specification.record;

import org.springframework.data.jpa.domain.Specification;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.Record;

import java.util.Date;

public class RecordSpecificationBuilder {

    private Specification<Record> instance = null;

    public RecordSpecificationBuilder addStartDateSpecification(Date date) {
        createOrAddSpecification(new RecordStartDateSpecification(date));
        return this;
    }

    public RecordSpecificationBuilder addEndDateSpecification(Date date) {
        createOrAddSpecification(new RecordEndDateSpecification(date));
        return this;
    }

    public RecordSpecificationBuilder addDeviceSpecification(Device device) {
        createOrAddSpecification(new RecordDeviceSpecification(device));
        return this;
    }

    public RecordSpecificationBuilder addEmployeeSpecification(Employee employee) {
        createOrAddSpecification(new RecordEmployeeSpecification(employee));
        return this;
    }

    public Specification<Record> build() {
        return  instance;
    }

    private void createOrAddSpecification(Specification<Record> specification) {
        if (instance == null) {
            instance = specification;
        } else {
            instance = instance.and(specification);
        }
    }

}
