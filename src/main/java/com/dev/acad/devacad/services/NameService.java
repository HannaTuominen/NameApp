package com.dev.acad.devacad.services;

import com.dev.acad.devacad.entities.Name;

import java.util.List;
import java.util.Optional;

public interface NameService {
    Optional<Name> findById(Long id);
    Optional<Name> findByName(String name);
    List<Name> list();
    Name save(Name newUser);
}
