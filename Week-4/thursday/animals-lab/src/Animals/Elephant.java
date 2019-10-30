package Animals;

public class Elephant extends Mammal{
    private boolean hasDrySkin;
    private String birthStyle;

    public Elephant(int topSpeed, boolean isEndangered, String name, int numTeeth, boolean hasTusk, boolean hasDrySkin, String birthStyle) {
        super(topSpeed, isEndangered, name, numTeeth, hasTusk);

        this.hasDrySkin = hasDrySkin;
        this.birthStyle = birthStyle;
    }
}
