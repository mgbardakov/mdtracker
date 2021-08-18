package ru.tehnotron.mdtracker.controllers.v1;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import ru.tehnotron.mdtracker.service.PositionService;

@Controller
@RequestMapping("api/v1/positions/")
public class PositionController {

    private final PositionService service;

    public PositionController(PositionService service) {
        this.service = service;
    }
}
