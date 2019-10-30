package com.example;

import java.util.*;

public class Example5 {
    public static void main(String[] args) {
        List<Employee> employeeList = new ArrayList<>();
        employeeList.add(new Employee("John", "Smith", 25));

        Collections.sort(employeeList, Comparator.comparing(Employee::getFirstName));

        for(Employee e: employeeList) {
            System.out.println(e);
        }
    }
}
