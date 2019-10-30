package OOP;

public class ShapeCalc {
    public static void main(String[] args) {
        Triangle triangle = new Triangle(3, 4, 5);
        Rectangle rectangle = new Rectangle(4, 5);
        Circle circle = new Circle(4);
        Square square = new Square(4);

        System.out.println("Triangle " + getCircumferenceAndArea(triangle));
        System.out.println("Rectangle " + getCircumferenceAndArea(rectangle));
        System.out.println("Circle " + getCircumferenceAndArea(circle));
        System.out.println("Square " + getCircumferenceAndArea(square));
    }

    private static String getCircumferenceAndArea(Shapes shape) {
        String rval = "circumference, area = " + shape.getCircumference() + ", " + shape.getArea();
        return rval;
    }
}