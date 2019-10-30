package Animals;

public class Dragon extends Reptile{
    private String howToKill;
    private String diet;

    public Dragon(int topSpeed, boolean isEndangered, String name, boolean hasScales, boolean isColdBlooded, String howToKill, String diet) {
        super(topSpeed, isEndangered, name, hasScales, isColdBlooded);

        this.howToKill = howToKill;
        this.diet = diet;
    }
}
