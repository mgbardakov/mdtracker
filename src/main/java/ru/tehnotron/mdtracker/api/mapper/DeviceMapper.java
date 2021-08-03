package ru.tehnotron.mdtracker.api.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import ru.tehnotron.mdtracker.api.dto.DeviceDTO;
import ru.tehnotron.mdtracker.domain.Device;

import java.util.List;

@Mapper
public interface DeviceMapper {

    DeviceMapper INSTANCE = Mappers.getMapper(DeviceMapper.class);

    DeviceDTO deviceToDeviceDTO(Device device);
    @Mapping(target = "employee", ignore = true)
    Device deviceDTOToDevice(DeviceDTO deviceDTO);
    List<DeviceDTO> deviceListToDeviceDTOList(List<Device> device);
    @Mapping(target = "employee", ignore = true)
    List<Device> deviceDTOListToDeviceList(List<DeviceDTO> deviceDTO);
}
