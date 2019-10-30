package Example3;

public class Demo extends MyClass {
    Demo d = new Demo();

    public void display2() {
        System.out.println("D2");
    }

    @Override
    public static void main(String[] args) {
        Demo d = new Demo();
        d.display();
    }
}
