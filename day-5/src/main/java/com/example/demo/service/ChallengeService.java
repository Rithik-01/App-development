package com.example.demo.service;

import com.example.demo.model.Challenge;
import com.example.demo.repository.ChallengeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChallengeService {

    @Autowired
    private ChallengeRepository challengeRepository;

    public List<Challenge> getAllChallenges() {
        return challengeRepository.findAll();
    }

    public Optional<Challenge> getChallengeById(Long id) {
        return challengeRepository.findById(id);
    }

    public Challenge createChallenge(Challenge challenge) {
        return challengeRepository.save(challenge);
    }

    public Challenge updateChallenge(Long id, Challenge updatedChallenge) {
        if (challengeRepository.existsById(id)) {
            updatedChallenge.setChallengeId(id);
            return challengeRepository.save(updatedChallenge);
        }
        return null;
    }

    public void deleteChallenge(Long id) {
        if (challengeRepository.existsById(id)) {
            challengeRepository.deleteById(id);
        }
    }
}
