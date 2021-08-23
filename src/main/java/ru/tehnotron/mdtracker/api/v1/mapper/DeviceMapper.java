package ru.tehnotron.mdtracker.api.v1.mapper;

import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.PositionDTO;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Position;

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
    @Mapping(target = "employee", ignore = true)
    @Mapping(target = "visible", ignore = true)
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateDeviceFromDTO(DeviceDTO deviceDTO, @MappingTarget Device device);
}
