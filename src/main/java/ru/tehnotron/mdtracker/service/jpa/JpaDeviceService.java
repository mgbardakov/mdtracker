package ru.tehnotron.mdtracker.service.jpa;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.tehnotron.mdtracker.api.v1.dto.entity.DeviceDTO;
import ru.tehnotron.mdtracker.api.v1.mapper.DeviceMapper;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.exception.TakenException;
import ru.tehnotron.mdtracker.exception.VerificationException;
import ru.tehnotron.mdtracker.repository.DeviceRepository;
import ru.tehnotron.mdtracker.service.DeviceService;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class JpaDeviceService implements DeviceService {

    private final DeviceRepository repository;
    private final DeviceMapper mapper;

    public JpaDeviceService(DeviceRepository repository, DeviceMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public void validateDevice(DeviceDTO deviceDTO) throws Exception {
        var dev = repository.findById(deviceDTO.getId())
                .filter(Device::isVisible).orElse(null);
        boolean expired = false;
        if (dev != null) {
            expired = (dev.getVerificationExpire().getTime() - System.currentTimeMillis()) < 0;
            if(dev.isTaken()) {
                throw new TakenException("Прибор уже используется!");
            }
        }
        if(expired) {
            throw new VerificationException("Срок поверки прибора истёк!");
        }
    }

    @Override
    public DeviceDTO create(DeviceDTO deviceDTO) {
        var device = mapper.deviceDTOToDevice(deviceDTO);
        return mapper.deviceToDeviceDTO(repository.save(device));
    }

    @Override
    public DeviceDTO read(DeviceDTO deviceDTO) {
        var device = repository.findById(deviceDTO.getId())
                .filter(Device::isVisible).orElse(null);
        return mapper.deviceToDeviceDTO(device);
    }

    @Override
    public void update(DeviceDTO deviceDTO) {
        repository.findById(deviceDTO.getId())
                .filter(Device::isVisible)
                .ifPresent(x -> mapper.updateDeviceFromDTO(deviceDTO, x));
    }

    @Override
    public void delete(DeviceDTO deviceDTO) {
         repository.findById(deviceDTO.getId()).ifPresent(x -> {
                    x.setVisible(false);
                    repository.save(x);
                });
    }

    @Override
    public List<DeviceDTO> findAll() {
        var devices = new ArrayList<Device>();
        repository.findAll().forEach(x -> {
          if (x.isVisible()) {
              devices.add(x);
          }
        });
        return mapper.deviceListToDeviceDTOList(devices);
    }
}
