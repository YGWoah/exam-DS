package me.massoudi.agencebancaireservice.service;

import lombok.AllArgsConstructor;
import me.massoudi.agencebancaireservice.model.Compte;
import me.massoudi.agencebancaireservice.repo.CompteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CompteService {

    private CompteRepository repository;

    public List<Compte> findAll() {
        return repository.findAll();
    }

    public Optional<Compte> findById(Long id) {
        return repository.findById(id);
    }

    public Compte save(Compte compte) {
        return repository.save(compte);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
