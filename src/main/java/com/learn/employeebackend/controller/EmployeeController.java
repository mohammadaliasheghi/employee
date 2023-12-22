package com.learn.employeebackend.controller;

import com.learn.employeebackend.entity.EmployeeEntity;
import com.learn.employeebackend.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.hibernate.service.spi.ServiceException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController()
@RequestMapping("/employee")
@RequiredArgsConstructor
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    @GetMapping("/list")
    public ResponseEntity<?> getList() {
        return ResponseEntity.ok(employeeRepository.findAll());
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody EmployeeEntity entity) {
        return ResponseEntity.ok(employeeRepository.save(entity));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody EmployeeEntity entity) {
        Optional<EmployeeEntity> optional = employeeRepository.findById(id);
        EmployeeEntity db = optional.orElseGet(EmployeeEntity::new);
        db.setFirstname(entity.getFirstname());
        db.setLastname(entity.getLastname());
        db.setEmail(entity.getEmail());
        if (db.getFirstname().isEmpty() || db.getLastname().isEmpty() || db.getEmail().isEmpty())
            throw new ServiceException("message.err.bad.request");
        return ResponseEntity.ok(employeeRepository.save(db));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        employeeRepository.deleteById(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return ResponseEntity.ok(employeeRepository.findById(id));
    }
}
