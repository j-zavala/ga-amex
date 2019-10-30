package Animals;

public class Animal {
    private int topSpeed;
    private boolean isEndangered;
    private String name;

    public Animal(int topSpeed, boolean isEndangered, String name)
    {
        this.topSpeed = topSpeed;
        this.isEndangered = isEndangered;
        this.name = name;
    }

//    GETTERS
    public int getTopSpeed() {
        return this.topSpeed;
    }

    public boolean getIsEndangered() {
        return this.isEndangered;
    }

    public String getName() {
        return this.name;
    }

//    SETTERS
    public void setTopSpeed(int topSpeed) {
        this.topSpeed = topSpeed;
    }

    public void setEndangered(boolean isEndangered) {
        this.isEndangered = isEndangered;
    }

    public void setName(String name) {
        this.name = name;
    }
}
