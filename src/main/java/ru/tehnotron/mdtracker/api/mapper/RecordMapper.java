package ru.tehnotron.mdtracker.api.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import ru.tehnotron.mdtracker.api.dto.RecordDTO;
import ru.tehnotron.mdtracker.domain.Record;

import java.util.List;

@Mapper
public interface RecordMapper {

    RecordMapper INSTANCE = Mappers.getMapper(RecordMapper.class);

    RecordDTO recordToRecordDTO(Record record);
    Record recordDTOToRecord(RecordDTO recordDTO);
    List<RecordDTO> recordListToRecordDTOList(List<Record> records);
    List<Record> recordDTOListToRecordList(List<RecordDTO> recordDTOs);
}
