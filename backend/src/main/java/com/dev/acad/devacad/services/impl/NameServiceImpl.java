package com.dev.acad.devacad.services.impl;

import com.dev.acad.devacad.entities.Name;
import com.dev.acad.devacad.repositories.NameRepository;
import com.dev.acad.devacad.services.NameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NameServiceImpl implements NameService {

    private NameRepository nameRepository;

    @Autowired
    public NameServiceImpl(NameRepository theNameRepository){
        this.nameRepository = theNameRepository;
    }

    @Override
    public Optional<Name> findById(Long id) {
        return nameRepository.findById(id);
    }

    @Override
    public Optional<Name> findByName(String name) {
        return nameRepository.findByName(name);
    }

    @Override
    public Name save(Name newName) {
        return nameRepository.save(newName);
    }

    @Override
    public List<Name> list() {
        return nameRepository.findAll();
    }
}
