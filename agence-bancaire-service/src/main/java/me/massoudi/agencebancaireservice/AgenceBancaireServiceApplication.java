package me.massoudi.agencebancaireservice;

import me.massoudi.agencebancaireservice.model.Compte;
import me.massoudi.agencebancaireservice.model.CompteType;
import me.massoudi.agencebancaireservice.model.Operation;
import me.massoudi.agencebancaireservice.repo.CompteRepository;
import me.massoudi.agencebancaireservice.repo.OperationRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
public class AgenceBancaireServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(AgenceBancaireServiceApplication.class, args);
    }


    @Bean
    CommandLineRunner commandLineRunner(CompteRepository compteRepository, OperationRepository operationRepository) {
        return args -> {


            Compte compte = new Compte(null, "123456789", 500d, "Mohamed", CompteType.COURANT, null);
            Operation operation = new Operation(null,new Date(), 100d, compte, "Depot");
        };
    }

}
