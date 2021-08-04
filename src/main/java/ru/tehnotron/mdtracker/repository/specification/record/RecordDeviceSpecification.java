package ru.tehnotron.mdtracker.repository.specification.record;

import org.springframework.data.jpa.domain.Specification;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Device_;
import ru.tehnotron.mdtracker.domain.Record;
import ru.tehnotron.mdtracker.domain.Record_;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class RecordDeviceSpecification implements Specification<Record> {

    private final Device device;

    public RecordDeviceSpecification(Device device) {
        this.device = device;
    }

    @Override
    public Predicate toPredicate(Root<Record> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
        return criteriaBuilder.equal(root.join(Record_.DEVICE).get(Device_.ID), device.getId());
    }
}
