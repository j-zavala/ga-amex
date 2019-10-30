package ExampleInterface1;

public class Demo implements MyInterface {
    public void method1() {
        System.out.println("Implement method1");
    }

    public void method2() {
        System.out.println("Implement method2");
    }

    public static void main(String[] args) {
        Demo d = new Demo();
        d.method1();
        d.method2();
    }


}
