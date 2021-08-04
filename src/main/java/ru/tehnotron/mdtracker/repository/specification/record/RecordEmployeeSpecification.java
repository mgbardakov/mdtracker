package ru.tehnotron.mdtracker.repository.specification.record;

import org.springframework.data.jpa.domain.Specification;
import ru.tehnotron.mdtracker.domain.*;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class RecordEmployeeSpecification implements Specification<Record> {

    private final Employee employee;

    public RecordEmployeeSpecification(Employee employee) {
        this.employee = employee;
    }

    @Override
    public Predicate toPredicate(Root<Record> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
        return criteriaBuilder.equal(root.join(Record_.EMPLOYEE).get(Employee_.ID), employee.getId());
    }
}
