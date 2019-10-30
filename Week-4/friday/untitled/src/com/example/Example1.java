package com.example;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class Example1 {
    public static void main(String[] args) {
        List<String> stringList = Arrays.asList("Hello", "World");
        //creating a new stream
        Stream<Integer> integerStream = Stream.of(1,2,3,4);

        //convert stringList to stream
        Stream stringStream = stringList.stream();
        stringStream.forEach(value -> System.out.println(value));

        integerStream.forEach(value -> System.out.println(value));
    }
}
