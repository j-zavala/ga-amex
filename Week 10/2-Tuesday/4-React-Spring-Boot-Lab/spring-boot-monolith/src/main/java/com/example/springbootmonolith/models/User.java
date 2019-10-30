package com.example.springbootmonolith.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@Entity
@Table(name = "users")
public class User {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String username;

    @Column
    private String password;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="user_profile_id")
    private UserProfile userProfile;

    @ManyToOne(cascade = {CascadeType.DETACH,
            CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "user_role_id", nullable = false)
    private UserRole userRole;

    @ManyToMany(fetch = FetchType.LAZY,
                cascade = {CascadeType.DETACH,
                        CascadeType.MERGE, CascadeType.REFRESH})
    @JoinTable(name = "user_course",
            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = @JoinColumn(name = "course_id"))
    private List<Course> courses;

    public User() {}

    public List<Course> addCourse(Course course){
        if(courses == null)
            courses = new ArrayList<>();
        courses.add(course);

        return courses;
    }

    public List<Course> getCourses(){ return courses; }

    public void setCourses(List<Course> courses) { this.courses = courses; }

    public UserRole getUserRole() { return userRole; }

    public void setUserRole(UserRole userRole) { this.userRole = userRole; }

    public UserProfile getUserProfile() { return userProfile; }

    public void setUserProfile(UserProfile userProfile) { this.userProfile = userProfile; }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
