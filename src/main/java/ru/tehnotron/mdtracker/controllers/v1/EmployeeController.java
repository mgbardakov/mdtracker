package ru.tehnotron.mdtracker.controllers.v1;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import ru.tehnotron.mdtracker.api.v1.dto.entity.EmployeeDTO;
import ru.tehnotron.mdtracker.service.EmployeeService;

import java.util.List;

@RestController
@RequestMapping("api/v1/employees/")
@PreAuthorize("hasRole('ADMIN')")
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(EmployeeService service) {
        this.service = service;
    }

    @PostMapping("create")
    public EmployeeDTO createEmployee(@RequestBody EmployeeDTO employeeDTO) {
        return service.create(employeeDTO);
    }

    @GetMapping("{id}")
    public EmployeeDTO getEmployee(@PathVariable long id) {
        var employeeDTO = new EmployeeDTO();
        employeeDTO.setId(id);
        return service.read(employeeDTO);
    }

    @PutMapping("update")
    public void updateEmployee(@RequestBody EmployeeDTO employeeDTO) {
        service.update(employeeDTO);
    }

    @PostMapping("delete")
    public void deleteEmployee(@RequestBody EmployeeDTO employeeDTO) {
        service.delete(employeeDTO);
    }

    @GetMapping()
    public List<EmployeeDTO> getAllEmployees() {
        return service.findAll();
    }

}
