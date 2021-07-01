package ru.tehnotron.mdtracker.service;

import ru.tehnotron.mdtracker.domain.Device;


public interface DeviceService extends CrudService<Device> {
    void validateDevice(Device device) throws Exception;
}
