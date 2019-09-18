public class Animal {
    //Put instance variables here
    private int numLegs;
    private int topSpeed;
    private boolean isEndangered;
    private String name;

    //Put constructor here
    public Animal(int numLegs, int topSpeed , boolean isEndangered, String name){
        this.numLegs = numLegs;
        this.topSpeed = topSpeed;
        this.isEndangered = isEndangered;
        this.name = name;
    }

    //Put getters and setters here
    public int getNumLegs()
    {
        return this.numLegs;
    }

    public void setNumLegs(int numLegs)
    {
        this.numLegs = numLegs;
    }

    public int getTopSpeed()
    {
        return this.topSpeed;
    }

    public void setTopSpeed(int topSpeed)
    {
        this.topSpeed = topSpeed;
    }

    public boolean getIsEndangered()
    {
        return this.isEndangered;
    }

    public void setIsEndangered(boolean isEndangered)
    {
        this.isEndangered = isEndangered;
    }

    public String getName()
    {
        return this.name;
    }

    public void setName(String name)
    {
        this.name = name;
    }



    public static void main(String[] args) {
        //Instantiate new Animal
        Animal animal = new Animal(4, 75, true, "cheetah");
        String name;
        int topSpeed;
        boolean isEndangered;

        //get name and speed values using getters
        name = animal.getName();
        topSpeed = animal.getTopSpeed();
        isEndangered = animal.getIsEndangered();

        //Print some output
        System.out.println("My name is " + name);
        System.out.println("I go at " + topSpeed + " miles per hour");

        if (isEndangered) {
            System.out.println("I am endangered.");
        } else
        {
            System.out.println("I am not endangered.");
        }


        //Set new name, speed, and endangered properties values using setters
        animal.setName("turtle");
        animal.setTopSpeed(1);
        animal.setIsEndangered(false);

        //get new values using getters
        name = animal.getName();
        topSpeed = animal.getTopSpeed();
        isEndangered = animal.getIsEndangered();

        //Print some output
        System.out.println("My name is " + name);
        System.out.println("I go at " + topSpeed + " miles per hour");
        if (isEndangered) {
            System.out.println("I am endangered.");
        } else
        {
            System.out.println("I am NOT endangered.");
        }
    }
}