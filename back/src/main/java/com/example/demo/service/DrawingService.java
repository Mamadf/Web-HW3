package com.example.paintapp.service;

import com.example.paintapp.model.Drawing;
import com.example.paintapp.model.User;
import com.example.paintapp.repository.DrawingRepository;
import com.example.paintapp.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class DrawingService {

    private final DrawingRepository drawingRepository;
    private final UserRepository userRepository;

    public DrawingService(DrawingRepository drawingRepository, UserRepository userRepository) {
        this.drawingRepository = drawingRepository;
        this.userRepository = userRepository;
    }

    public Drawing saveDrawing(String username, String jsonContent) {
        User user = userRepository.findById(username).orElseThrow();
        Drawing drawing = user.getDrawing();

        if (drawing == null) {
            drawing = new Drawing();
            drawing.setUser(user);
        }

        drawing.setJsonContent(jsonContent);
        user.setDrawing(drawing);

        return drawingRepository.save(drawing);
    }

    public String getDrawingJson(String username) {
        Drawing drawing = drawingRepository.findByUserUsername(username);
        return drawing != null ? drawing.getJsonContent() : null;
    }
}
