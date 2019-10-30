package com.example;

import java.util.ArrayList;
import java.util.List;

public class Example3 {
    public static void main(String[] args) {
        List<String> myList = new ArrayList<String>();
        myList.add("Laptop");
        myList.add("C++ book");
        myList.add("Python book");
        myList.add("Java Book");

        //Java 8-
        for (int i = 0; i < myList.size(); i++) {
            System.out.println(myList.get(i));
        }

        for (String m: myList) {
            System.out.println(m);
        }

        //Java 8+
        myList.forEach(m -> System.out.println(m));
    }
}
