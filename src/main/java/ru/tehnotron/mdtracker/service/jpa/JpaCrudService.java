package ru.tehnotron.mdtracker.service.jpa;

import org.springframework.data.repository.CrudRepository;
import ru.tehnotron.mdtracker.domain.BaseEntity;
import ru.tehnotron.mdtracker.service.CrudService;

import java.util.ArrayList;
import java.util.List;

public abstract class JpaCrudService<T extends BaseEntity, R extends CrudRepository<T, Long>> implements CrudService<T> {

    protected final R repository;

    public JpaCrudService(R repository) {
        this.repository = repository;
    }

    @Override
    public T create(T t) {
        return repository.save(t);
    }

    @Override
    public T read(T t) {
        return repository.findById(t.getId()).orElse(null);
    }

    @Override
    public void update(T t) {
        repository.save(t);
    }

    @Override
    public void delete(T t) {
        repository.delete(t);
    }

    @Override
    public List<T> findAll() {
        var list = new ArrayList<T>();
        repository.findAll().forEach(list::add);
        return list;
    }
}
