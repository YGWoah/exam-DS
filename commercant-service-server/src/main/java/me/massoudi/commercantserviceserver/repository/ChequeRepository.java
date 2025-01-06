package me.massoudi.commercantserviceserver.repository;


import me.massoudi.commercantserviceserver.model.Cheque;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChequeRepository extends JpaRepository<Cheque, Long> {
}
