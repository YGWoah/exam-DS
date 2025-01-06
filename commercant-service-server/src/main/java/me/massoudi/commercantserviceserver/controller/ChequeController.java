package me.massoudi.commercantserviceserver.controller;

import lombok.AllArgsConstructor;
import me.massoudi.commercantserviceserver.model.Cheque;
import me.massoudi.commercantserviceserver.service.ChequeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cheques")
@AllArgsConstructor
public class ChequeController {

    private ChequeService chequeService;

    @GetMapping
    public List<Cheque> getAllCheques() {
        return chequeService.getAllCheques();
    }

    @GetMapping("/{id}")
    public Cheque getChequeById(@PathVariable Long id) {
        return chequeService.getChequeById(id);
    }

    @PostMapping
    public Cheque createCheque(@RequestBody Cheque cheque) {
        return chequeService.saveCheque(cheque);
    }

    @DeleteMapping("/{id}")
    public void deleteCheque(@PathVariable Long id) {
        chequeService.deleteCheque(id);
    }
}
