package ru.tehnotron.mdtracker.api.v1.mapper;

import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.PositionDTO;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.domain.Position;

import java.util.Date;
import java.util.List;

@Mapper
public interface DeviceMapper {

    DeviceMapper INSTANCE = Mappers.getMapper(DeviceMapper.class);

    DeviceDTO deviceToDeviceDTO(Device device);

    Device deviceDTOToDevice(DeviceDTO deviceDTO);

    List<DeviceDTO> deviceListToDeviceDTOList(List<Device> device);

    List<Device> deviceDTOListToDeviceList(List<DeviceDTO> deviceDTO);

    @Mapping(target = "visible", ignore = true)
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateDeviceFromDTO(DeviceDTO deviceDTO, @MappingTarget Device device);

    static long map(Date date) {
        if (date == null) {
            return 0;
        }
        return date.getTime();
    }
    static Date map(long millis) {
        if (millis == 0) {
            return null;
        }
        return new Date(millis);
    }
}
