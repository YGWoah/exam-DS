package me.massoudi.agencebancaireservice.controller;

import lombok.AllArgsConstructor;
import me.massoudi.agencebancaireservice.model.Compte;
import me.massoudi.agencebancaireservice.service.CompteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/comptes")
@AllArgsConstructor
public class CompteController {

    private CompteService service;

    @GetMapping
    public List<Compte> getAllComptes() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Compte> getCompteById(@PathVariable Long id) {
        Optional<Compte> compte = service.findById(id);
        return compte.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Compte createCompte(@RequestBody Compte compte) {
        return service.save(compte);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Compte> updateCompte(@PathVariable Long id, @RequestBody Compte compte) {
        if (!service.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        compte.setId(id);
        return ResponseEntity.ok(service.save(compte));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCompte(@PathVariable Long id) {
        if (!service.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
