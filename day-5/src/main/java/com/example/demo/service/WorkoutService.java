package com.example.demo.service;



import com.example.demo.model.Workout;
import com.example.demo.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WorkoutService {

    @Autowired
    private WorkoutRepository workoutRepository;

    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }

    public Optional<Workout> getWorkoutById(String id) {
        return workoutRepository.findById(id);
    }

    public Workout createWorkout(Workout workout) {
        return workoutRepository.save(workout);
    }

    public void deleteWorkout(String id) {
        workoutRepository.deleteById(id);
    }
}
