package com.example.springbootmonolith.repositories;

import com.example.springbootmonolith.models.UserProfile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserProfileRepository extends CrudRepository<UserProfile, Long> {

    @Query("from UserProfile up left join User u on u.username = ?1 and up.id = u.userProfile.id")
    public UserProfile findProfileByUsername(String username);

}
