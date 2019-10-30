public class Animal {
    //Put instance variables here
    private int numLegs;
    private int topSpeed;
    private boolean isEndangered;
    private String name;

    String newLine = System.getProperty("line.separator");//This will retrieve line separator dependent on OS.

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

    public String intro(int topSpeed, boolean isEndangered, String name)
    {
//      set the properties to what user inputs
        setName(name);
        setTopSpeed(topSpeed);
        setIsEndangered(isEndangered);

        String areWeEndangered = getIsEndangered() ? "I am endangered" : "I am NOT endangered";

        //return the string detailing the animal properties
        String output = "Name: " + name + newLine + "Top speed: " + newLine +  "Endangered: " + areWeEndangered + newLine;
        return output;
    }

    public static void main(String[] args)
    {
        String newLine = System.getProperty("line.separator");//This will retrieve line separator dependent on OS.
        //Instantiate new Animal
        Animal animal = new Animal(4, 75, true, "cheetah");
        System.out.print("Name: " + animal.getName() + newLine + "Top speed: " + animal.getTopSpeed() + newLine + "Endangered: " + animal.getIsEndangered());
        System.out.println(newLine);
        System.out.print(animal.intro(75, true, "Bill"));
    }
}