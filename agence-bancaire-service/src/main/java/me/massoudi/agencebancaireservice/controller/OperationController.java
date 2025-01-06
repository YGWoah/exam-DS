package me.massoudi.agencebancaireservice.controller;

import lombok.AllArgsConstructor;
import me.massoudi.agencebancaireservice.model.Operation;
import me.massoudi.agencebancaireservice.service.OperationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/operations")
@AllArgsConstructor
public class OperationController {

    private OperationService service;

    @GetMapping
    public List<Operation> getAllOperations() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Operation> getOperationById(@PathVariable Long id) {
        Optional<Operation> operation = service.findById(id);
        return operation.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Operation createOperation(@RequestBody Operation operation) {
        return service.save(operation);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Operation> updateOperation(@PathVariable Long id, @RequestBody Operation operation) {
        if (!service.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        operation.setId(id);
        return ResponseEntity.ok(service.save(operation));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOperation(@PathVariable Long id) {
        if (!service.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
