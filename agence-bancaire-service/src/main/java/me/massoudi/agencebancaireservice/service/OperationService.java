package me.massoudi.agencebancaireservice.service;

import lombok.AllArgsConstructor;
import me.massoudi.agencebancaireservice.model.Operation;
import me.massoudi.agencebancaireservice.repo.OperationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class OperationService {

    private OperationRepository repository;

    public List<Operation> findAll() {
        return repository.findAll();
    }

    public Optional<Operation> findById(Long id) {
        return repository.findById(id);
    }

    public Operation save(Operation operation) {
        return repository.save(operation);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
