package com.example.paintapp;

import com.example.paintapp.model.User;
import com.example.paintapp.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PaintAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(PaintAppApplication.class, args);
    }

    @Bean
    public CommandLineRunner initUsers(UserRepository userRepository) {
        return args -> {
            if (userRepository.findById("user1").isEmpty()) {
                userRepository.save(new User("user1"));
                userRepository.save(new User("user2"));
            }
        };
    }
}
