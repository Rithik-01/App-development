package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Challenge;

public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
    // Additional query methods can be defined here
}
