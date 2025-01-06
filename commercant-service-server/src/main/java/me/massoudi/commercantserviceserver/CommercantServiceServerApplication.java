package me.massoudi.commercantserviceserver;

import me.massoudi.commercantserviceserver.model.Cheque;
import me.massoudi.commercantserviceserver.repository.ChequeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CommercantServiceServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(CommercantServiceServerApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(ChequeRepository chequeRepository) {
        return args -> {
            Cheque cheque1 = new Cheque(null, "123456789", "str", "str", "sl", 10d, true);
            Cheque cheque2 = new Cheque(null, "987654321", "str", "str", "sl", 10d, true);
            chequeRepository.save(cheque1);

            chequeRepository.save(cheque2);

        };
    }

}
