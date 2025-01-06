package me.massoudi.banquecentraleservice;

import me.massoudi.banquecentraleservice.model.AgenceBancaire;
import me.massoudi.banquecentraleservice.repository.AgenceBancaireRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BanqueCentraleServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(BanqueCentraleServiceApplication.class, args);
    }


    @Bean
    CommandLineRunner commandLineRunner(
            AgenceBancaireRepository agenceBancaireRepository
    ) {
        return args -> {
            AgenceBancaire agenceBancaire = new AgenceBancaire(null, "Shishi", "Al hociema", "shishi.ma");
            AgenceBancaire agenceBancaire1 = new AgenceBancaire(null, "Tanger", "Tanger", "tanger.ma");
            AgenceBancaire agenceBancaire2 = new AgenceBancaire(null, "Rabat", "Rabat", "rabat.ma");

            agenceBancaireRepository.save(agenceBancaire);
            agenceBancaireRepository.save(agenceBancaire1);
            agenceBancaireRepository.save(agenceBancaire2);

        };
    }

}
