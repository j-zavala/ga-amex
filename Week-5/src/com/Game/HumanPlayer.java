package com.Game;

import java.util.Scanner;

public class HumanPlayer extends Player {
    private String name;
    private String userInputs;

    Scanner scanner = new Scanner(System.in);

    public HumanPlayer() {
        super();
    }

    @Override
    public String getName() {
        System.out.println("Enter name");
        setName(scanner.nextLine());
        System.out.println("Name is: " + name);
        return name;
    }

    @Override
    public void setName(String name) {
        this.name = name;
    }

    public askForInputs() {

    }

}
