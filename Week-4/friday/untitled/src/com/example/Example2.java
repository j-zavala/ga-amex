package com.example;

import javax.swing.*;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Example2 {
    public static void main(String[] args) {
        Stream<Integer> integerStream = Stream.of(1,2,3,4);
        List<Integer> integerList = integerStream.collect(Collectors.toList());
        System.out.println(integerList);

        integerStream = Stream.of(1,2,3,4);
        Map<Integer, Integer> integerMap = integerStream.collect(){
            Map<Integer, Integer> intMap = inStream.collection(Collectors.toMap( 1->i, 1->i));

        }

    }
}
