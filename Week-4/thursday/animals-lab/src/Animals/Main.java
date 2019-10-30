package Animals;

public class Main {
    public static void main(String[] args) {
        Reptile gecko = new Reptile(2,true,  "Phil",true,true);
        Dragon viserion = new Dragon(100,true,"viserion",true,true,"dragon stone","mammals");
        Mammal dog = new Mammal(15,false,"Suzy",40,false);
        Elephant forestElephant = new Elephant(25,true,"Dumbo", 26, true,  true, "womb");

        System.out.println("My name is " + gecko.getName());
        System.out.println("My name is " + viserion.getName());
        System.out.println("My name is " + dog.getName());
        System.out.println("My name is " + forestElephant.getName());
    }
}
