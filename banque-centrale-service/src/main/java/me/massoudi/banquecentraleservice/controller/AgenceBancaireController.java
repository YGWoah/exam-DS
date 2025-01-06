package me.massoudi.banquecentraleservice.controller;

import lombok.AllArgsConstructor;
import me.massoudi.banquecentraleservice.model.AgenceBancaire;
import me.massoudi.banquecentraleservice.service.AgenceBancaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/agences")
@AllArgsConstructor
public class AgenceBancaireController {

    private AgenceBancaireService service;

    @GetMapping
    public List<AgenceBancaire> getAllAgences() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AgenceBancaire> getAgenceById(@PathVariable Long id) {
        Optional<AgenceBancaire> agence = service.findById(id);
        return agence.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public AgenceBancaire createAgence(@RequestBody AgenceBancaire agenceBancaire) {
        return service.save(agenceBancaire);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AgenceBancaire> updateAgence(@PathVariable Long id, @RequestBody AgenceBancaire agenceBancaire) {
        if (!service.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        agenceBancaire.setId(id);
        return ResponseEntity.ok(service.save(agenceBancaire));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAgence(@PathVariable Long id) {
        if (!service.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
