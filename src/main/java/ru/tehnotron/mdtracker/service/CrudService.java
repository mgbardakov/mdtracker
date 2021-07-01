package ru.tehnotron.mdtracker.service;

import java.util.List;

public interface CrudService<T> {
    T create(T t);
    T read(T t);
    void update(T t);
    void delete(T t);
    List<T> findAll();
}
