package com.example.springbootmonolith.service;

import com.example.springbootmonolith.models.UserRole;

public interface UserRoleService {

    public UserRole createRole(UserRole newRole);

    public UserRole getRole(String roleName);
}
