package me.massoudi.banquecentraleservice.repository;


import me.massoudi.banquecentraleservice.model.AgenceBancaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgenceBancaireRepository extends JpaRepository<AgenceBancaire, Long> {
}
