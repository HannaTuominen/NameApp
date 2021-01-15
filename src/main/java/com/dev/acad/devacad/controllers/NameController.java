package com.dev.acad.devacad.controllers;

import com.dev.acad.devacad.entities.Name;
import com.dev.acad.devacad.services.NameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class NameController implements CommandLineRunner {

    @Autowired
    private NameService nameService;

    @Autowired
    public NameController(NameService theNamesController){
        nameService = theNamesController;
    }

    @RequestMapping("api/names/getAll")
    public Iterable<Name> getAll(){
        return nameService.list();
    }

    @RequestMapping("api/test/names")
    public void testNames(){
        nameService.save(new Name("Ville", 24));
        nameService.save(new Name("Anna", 6));
        nameService.save(new Name("Antti", 22));
        nameService.save(new Name("Sanna", 5));
        nameService.save(new Name("Mikko", 19));
        nameService.save(new Name("Minna", 5));
        nameService.save(new Name("Timo", 18));
        nameService.save(new Name("Satu", 5));
        nameService.save(new Name("Tuomas", 16));
        nameService.save(new Name("Tiina", 5));
        nameService.save(new Name("Tero", 15));
        nameService.save(new Name("Kati", 5));
        nameService.save(new Name("Sami", 15));
        nameService.save(new Name("Henna", 4));
        nameService.save(new Name("Mika", 12));
        nameService.save(new Name("Liisa", 4));
        nameService.save(new Name("Janne", 12));
        nameService.save(new Name("Paula", 4));
        nameService.save(new Name("Petri", 11));
        nameService.save(new Name("Suvi", 4));
    }

    @Override
    public void run(String... args) throws Exception {
        testNames();
    }
}
