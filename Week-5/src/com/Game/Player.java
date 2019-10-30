package com.Game;

public abstract class Player {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String input) {
        this.name = input;
    }

    public String toString() {
        return String.format("First name is %s: ", name);
    }
}
