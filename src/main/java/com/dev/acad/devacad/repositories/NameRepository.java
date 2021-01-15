package com.dev.acad.devacad.repositories;

import com.dev.acad.devacad.entities.Name;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NameRepository extends JpaRepository<Name, Long> {
    List<Name> findAll();
    Optional<Name> findByName(String name);
}
