package com.example.paintapp.model;

import jakarta.persistence.*;

@Entity
@Table(name = "app_user") 
public class User {

    @Id
    private String username;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Drawing drawing;

    public User() {}

    public User(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public Drawing getDrawing() {
        return drawing;
    }

    public void setDrawing(Drawing drawing) {
        this.drawing = drawing;
    }
}
