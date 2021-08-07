package ru.tehnotron.mdtracker.service.jpa;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import ru.tehnotron.mdtracker.api.dto.entity.PositionDTO;
import ru.tehnotron.mdtracker.api.mapper.DeviceMapper;
import ru.tehnotron.mdtracker.api.mapper.EmployeeMapper;
import ru.tehnotron.mdtracker.api.mapper.PositionMapper;
import ru.tehnotron.mdtracker.api.mapper.RecordMapper;
import ru.tehnotron.mdtracker.domain.Position;
import ru.tehnotron.mdtracker.repository.DeviceRepository;
import ru.tehnotron.mdtracker.repository.EmployeeRepository;
import ru.tehnotron.mdtracker.repository.PositionRepository;
import ru.tehnotron.mdtracker.repository.RecordRepository;
import ru.tehnotron.mdtracker.service.DeviceRegisterService;
import ru.tehnotron.mdtracker.service.PositionService;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class JpaPositionServiceTest {

    @Mock
    PositionRepository repo;

    PositionService service;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        service = new JpaPositionService(repo, PositionMapper.INSTANCE);
    }


    @Test
    void whenReadVisiblePositionThenOneFounded() {
        var position = new Position();
        position.setId(1L);
        when(repo.findById(any())).thenReturn(Optional.of(position));

        assertEquals(service.read(new PositionDTO()).getId(), position.getId());
    }

    @Test
    void whenReadInvisiblePositionThenNullFounded() {
        var position = new Position();
        position.setVisible(false);
        when(repo.findById(any())).thenReturn(Optional.of(position));

        assertNull(service.read(new PositionDTO()));
    }

    @Test
    void whenUpdateVisiblePositionThenSaveInvoked() {
        var position = new Position();
        when(repo.findById(any())).thenReturn(Optional.of(position));

        service.update(new PositionDTO());
        verify(repo, times(1)).save(position);
    }

    @Test
    void whenUpdateInvisiblePositionThenSaveNotInvoked() {
        var position = new Position();
        position.setVisible(false);
        when(repo.findById(any())).thenReturn(Optional.of(position));

        service.update(new PositionDTO());
        verify(repo, times(0)).save(position);
    }

    @Test
    void whenDeletePositionThenTwoRepoMethodsInvoked() {
        var positionDTO = new PositionDTO();
        positionDTO.setId(1L);
        var position = new Position();
        when(repo.findById(any())).thenReturn(Optional.of(position));
        service.delete(positionDTO);

        verify(repo, times(1)).findById(1L);
        verify(repo, timeout(1)).save(position);
    }

    @Test
    void findAll() {
        var position1 = new Position();
        var position2 = new Position();
        position2.setVisible(false);
        when(repo.findAll()).thenReturn(List.of(position1, position2));
        assertEquals(service.findAll().size(), 1);
        assertEquals(service.findAll().get(0).getId(), position1.getId());
    }
}
