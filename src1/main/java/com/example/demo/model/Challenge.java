package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@Entity
public class Challenge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long challengeId;

    private String challengeName;

    private LocalDate startDate;

    private LocalDate endDate;

    private Long duration;

    private String level;

    // Constructors
    public Challenge() {}

    public Challenge(String challengeName, LocalDate startDate, LocalDate endDate, String level) {
        this.challengeName = challengeName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.duration = ChronoUnit.DAYS.between(startDate, endDate);
        this.level = level;
    }

    // Getters and Setters
    public Long getChallengeId() {
        return challengeId;
    }

    public void setChallengeId(Long challengeId) {
        this.challengeId = challengeId;
    }

    public String getChallengeName() {
        return challengeName;
    }

    public void setChallengeName(String challengeName) {
        this.challengeName = challengeName;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
        setDuration();
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
        setDuration();
    }

    public Long getDuration() {
        return duration;
    }

    private void setDuration() {
        if (this.startDate != null && this.endDate != null) {
            this.duration = ChronoUnit.DAYS.between(this.startDate, this.endDate);
        }
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
