package Animals;

public class Mammal extends Animal {
    private int numTeeth;
    private boolean hasTusk;

    public Mammal(int topSpeed, boolean isEndangered, String name, int numTeeth, boolean hasTusk) {
        super(topSpeed, isEndangered, name);

        this.numTeeth = numTeeth;
        this.hasTusk = hasTusk;
    }


}

