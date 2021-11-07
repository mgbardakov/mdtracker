package ru.tehnotron.mdtracker.api.v1.mapper;

import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import ru.tehnotron.mdtracker.api.v1.dto.entity.PositionDTO;
import ru.tehnotron.mdtracker.api.v1.dto.entity.RecordDTO;
import ru.tehnotron.mdtracker.domain.Position;
import ru.tehnotron.mdtracker.domain.Record;

import java.util.Date;
import java.util.List;

@Mapper
public interface RecordMapper {

    RecordMapper INSTANCE = Mappers.getMapper(RecordMapper.class);

    RecordDTO recordToRecordDTO(Record record);

    @Mapping(target = "employee", ignore = true)
    @Mapping(target = "device", ignore = true)
    Record recordDTOToRecord(RecordDTO recordDTO);

    List<RecordDTO> recordListToRecordDTOList(List<Record> records);

    List<Record> recordDTOListToRecordList(List<RecordDTO> recordDTOs);

    @Mapping(target = "employee", ignore = true)
    @Mapping(target = "device", ignore = true)
    void updateRecordFromDTO(RecordDTO recordDTO, @MappingTarget Record record);

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
