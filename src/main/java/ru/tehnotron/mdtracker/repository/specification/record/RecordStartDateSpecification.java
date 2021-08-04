package ru.tehnotron.mdtracker.repository.specification.record;

import org.springframework.data.jpa.domain.Specification;
import ru.tehnotron.mdtracker.domain.Record;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.Date;


public class RecordStartDateSpecification implements Specification<Record> {

    private final Date dateParam;

    public RecordStartDateSpecification(Date dateParam) {
        this.dateParam = dateParam;
    }

    @Override
    public Predicate toPredicate(Root<Record> root,
                                 CriteriaQuery<?> criteriaQuery,
                                 CriteriaBuilder criteriaBuilder) {
        return criteriaBuilder.greaterThanOrEqualTo(root.<Date>get("taken"), dateParam);
    }
}
