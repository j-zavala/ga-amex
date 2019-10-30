package com.example;

interface Compute {
    //doesn't say what we do in the end
    int operation(int a, int b);
//    int operation2(int a, int b, int c);
};

public class LambdaExpressionDemo {
    public static void main(String args[]) {
        Compute add = (a, b) -> a+b;
        System.out.println("1 + 1 = " + add.operation(1,1));

//        Compute addMore = (a, b, c) -> a+b+c;


    }
}
