package me.massoudi.commercantserviceserver.service;


import lombok.AllArgsConstructor;
import me.massoudi.commercantserviceserver.model.Cheque;
import me.massoudi.commercantserviceserver.repository.ChequeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ChequeService {

    private ChequeRepository chequeRepository;

    public List<Cheque> getAllCheques() {
        return chequeRepository.findAll();
    }

    public Cheque getChequeById(Long id) {
        return chequeRepository.findById(id).orElse(null);
    }

    public Cheque saveCheque(Cheque cheque) {
        return chequeRepository.save(cheque);
    }

    public void deleteCheque(Long id) {
        chequeRepository.deleteById(id);
    }
}
