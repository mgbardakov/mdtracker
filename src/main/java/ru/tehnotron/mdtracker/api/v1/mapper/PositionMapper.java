package ru.tehnotron.mdtracker.api.v1.mapper;

import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.PositionDTO;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.Position;

import java.util.List;

@Mapper
public interface PositionMapper {

    PositionMapper INSTANCE = Mappers.getMapper(PositionMapper.class);

    PositionDTO positionToPositionDTO(Position position);
    Position positionDTOToPosition (PositionDTO positionDTO);
    List<PositionDTO> positionListToPositionDTOList(List<Position> positions);
    List<Position> positionDTOListToPositionList (List<PositionDTO> positionDTOs);
    @Mapping(target = "visible", ignore = true)
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updatePositionFromDTO(PositionDTO positionDTO, @MappingTarget Position position);
}
