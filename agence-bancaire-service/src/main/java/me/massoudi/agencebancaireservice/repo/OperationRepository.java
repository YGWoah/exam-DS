package me.massoudi.agencebancaireservice.repo;

import me.massoudi.agencebancaireservice.model.Operation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OperationRepository extends JpaRepository<Operation, Long> {
}
