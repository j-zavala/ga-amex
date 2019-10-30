package com.example;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Example7 {
    public static void main(String[] args) {
        Stream<String> names2 = Stream.of("aBc", "d", "ef", "12345");
        List<String> reverseSorted = names2.sorted((Comparator.reverseOrder())).collect(Collectors.toList());
    }
}
