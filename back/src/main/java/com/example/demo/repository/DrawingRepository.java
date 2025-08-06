package com.example.paintapp.repository;

import com.example.paintapp.model.Drawing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrawingRepository extends JpaRepository<Drawing, Long> {
    Drawing findByUserUsername(String username);
}
