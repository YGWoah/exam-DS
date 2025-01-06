package me.massoudi.banquecentraleservice.service;


import lombok.AllArgsConstructor;
import me.massoudi.banquecentraleservice.model.AgenceBancaire;
import me.massoudi.banquecentraleservice.repository.AgenceBancaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AgenceBancaireService {

    private AgenceBancaireRepository repository;

    public List<AgenceBancaire> findAll() {
        return repository.findAll();
    }

    public Optional<AgenceBancaire> findById(Long id) {
        return repository.findById(id);
    }

    public AgenceBancaire save(AgenceBancaire agenceBancaire) {
        return repository.save(agenceBancaire);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
