package ru.tehnotron.mdtracker.service;

import ru.tehnotron.mdtracker.api.dto.entity.DeviceDTO;


public interface DeviceService extends CrudService<DeviceDTO> {
    void validateDevice(DeviceDTO deviceDTO) throws Exception;
}
