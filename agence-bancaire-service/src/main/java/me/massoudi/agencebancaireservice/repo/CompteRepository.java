package me.massoudi.agencebancaireservice.repo;

import me.massoudi.agencebancaireservice.model.Compte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompteRepository extends JpaRepository<Compte, Long> {
}
