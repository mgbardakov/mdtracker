package ru.tehnotron.mdtracker.api.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import ru.tehnotron.mdtracker.api.dto.PositionDTO;
import ru.tehnotron.mdtracker.domain.Position;

import java.util.List;

@Mapper
public interface PositionMapper {

    PositionMapper INSTANCE = Mappers.getMapper(PositionMapper.class);

    PositionDTO positionToPositionDTO(Position position);
    Position positionDTOToPosition (PositionDTO positionDTO);
    List<PositionDTO> positionListToPositionDTOList(List<Position> positions);
    List<Position> positionDTOListToPositionList (List<PositionDTO> positionDTOs);
}
