package OOP;
public class Triangle extends Shapes {
    private double side1;
    private double side2;
    private double side3;
    public Triangle(double side1, double side2, double side3)
    {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    @Override
    public double getCircumference() {
        return side1 + side2 + side3;
    }

    @Override
    public double getArea() {
        double circumference = getCircumference();
        double p = circumference/2;
        double squared = p * (p-side1) * (p-side2) * (p-side3);
        double area = Math.sqrt(squared);
        return area;
    }
}
