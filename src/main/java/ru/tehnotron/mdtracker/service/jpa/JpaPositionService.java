package ru.tehnotron.mdtracker.service.jpa;

import ru.tehnotron.mdtracker.api.dto.entity.PositionDTO;
import ru.tehnotron.mdtracker.api.mapper.PositionMapper;
import ru.tehnotron.mdtracker.domain.Employee;
import ru.tehnotron.mdtracker.domain.Position;
import ru.tehnotron.mdtracker.repository.PositionRepository;
import ru.tehnotron.mdtracker.service.PositionService;

import java.util.ArrayList;
import java.util.List;

public class JpaPositionService implements PositionService {

    private final PositionRepository repo;
    private final PositionMapper mapper;

    public JpaPositionService(PositionRepository repo, PositionMapper mapper) {
        this.repo = repo;
        this.mapper = mapper;
    }

    @Override
    public PositionDTO create(PositionDTO positionDTO) {
        var position = repo.save(mapper.positionDTOToPosition(positionDTO));
        return mapper.positionToPositionDTO(position);
    }

    @Override
    public PositionDTO read(PositionDTO positionDTO) {
        return mapper.positionToPositionDTO(repo.findById(positionDTO.getId())
                .filter(Position::isVisible).orElse(null));
    }

    @Override
    public void update(PositionDTO positionDTO) {
        repo.findById(positionDTO.getId())
                .filter(Position::isVisible).ifPresent(repo::save);
    }

    @Override
    public void delete(PositionDTO positionDTO) {
        repo.findById(positionDTO.getId()).ifPresent(x -> {
            x.setVisible(false);
            repo.save(x);
        });
    }

    @Override
    public List<PositionDTO> findAll() {
        var positions = new ArrayList<Position>();
        repo.findAll().forEach(x -> {
            if (x.isVisible()) {
                positions.add(x);
            }
        });
        return mapper.positionListToPositionDTOList(positions);
    }
}
