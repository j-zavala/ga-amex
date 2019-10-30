package ExampleInterface1;

public class Tyre implements Rollable, Moveable{

    public boolean isRollable() {
        return true;
    }

    public boolean isMoveable() {
        return true;
    }

    public static void main(String[] args) {
        Tyre goodYear = new Tyre();
        System.out.println(goodYear.isMoveable());
        System.out.println(goodYear.isRollable());
    }
}


