package Animals;

public class Reptile extends Animal{
    private boolean hasScales;
    private boolean isColdBlooded;

    public Reptile(int topSpeed, boolean isEndangered, String name, boolean hasScales, boolean isColdBlooded) {
        super(topSpeed, isEndangered, name);

        this.hasScales = hasScales;
        this.isColdBlooded = isColdBlooded;
    }
}
