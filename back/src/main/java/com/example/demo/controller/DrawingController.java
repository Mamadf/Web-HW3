package com.example.paintapp.controller;

import com.example.paintapp.service.DrawingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/drawings")
public class DrawingController {

    private final DrawingService drawingService;

    public DrawingController(DrawingService drawingService) {
        this.drawingService = drawingService;
    }

    @PostMapping("/{username}")
    public ResponseEntity<String> saveDrawing(@PathVariable String username, @RequestBody String jsonContent) {
        drawingService.saveDrawing(username, jsonContent);
        return ResponseEntity.ok("Drawing saved.");
    }

    @GetMapping("/{username}")
    public ResponseEntity<String> getDrawing(@PathVariable String username) {
        String json = drawingService.getDrawingJson(username);
        if (json != null) {
            return ResponseEntity.ok(json);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
