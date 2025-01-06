package me.massoudi.agencebancaireservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.actuate.endpoint.OperationType;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Operation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date date;
    private Double montant;
    private String numeroCheque;
    private BancaireOperationType type;
    private String description;

    @ManyToOne
    @JoinColumn(name = "compte_id")
    private Compte compte;
}
