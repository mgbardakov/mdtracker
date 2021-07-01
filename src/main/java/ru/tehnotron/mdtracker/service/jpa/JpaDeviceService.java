package ru.tehnotron.mdtracker.service.jpa;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.tehnotron.mdtracker.domain.Device;
import ru.tehnotron.mdtracker.exception.TakenException;
import ru.tehnotron.mdtracker.exception.VerificationException;
import ru.tehnotron.mdtracker.repository.DeviceRepository;
import ru.tehnotron.mdtracker.service.DeviceService;

@Service
@Transactional
public class JpaDeviceService extends JpaCrudService<Device, DeviceRepository> implements DeviceService {
    public JpaDeviceService(DeviceRepository repository) {
        super(repository);
    }

    @Override
    public void validateDevice(Device device) throws Exception {
        var dev = read(device);
        var expired = (dev.getVerificationExpire().getTime() - System.currentTimeMillis()) < 0;
        if(expired) {
            throw new VerificationException("Срок поверки прибора истёк!");
        }
        if(dev.isTaken()) {
            throw new TakenException(String.format("Прибор уже используется!" +
                    " Текущий пользователь: %s", dev.getEmployee().getName()));
        }
    }
}
