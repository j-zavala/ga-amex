import org.junit.Before;

import static org.junit.Assert.*;

public class AnimalTest {
    private Animal animal;

    @Before
    public void initializeAnimal() {
        animal = new Animal(2, 75, false, "human");
    }

    @org.junit.Test
    public void setNumLegs() {
        int expected = 3;
        animal.setNumLegs(3);
        int actual = animal.getNumLegs();

        assertEquals(expected, actual);
    }

    @org.junit.Test
    public void getTopSpeed() {
        int expected = 75;
        int actual = animal.getTopSpeed();

        assertEquals(expected, actual);
    }

    @org.junit.Test
    public void setTopSpeed() {
        int expected = 90;
        animal.setTopSpeed(90);
        int actual = animal.getTopSpeed();

        assertEquals(expected, actual);
    }

    @org.junit.Test
    public void getIsEndangered() {
        boolean expected = true;
        animal.setIsEndangered(true);
        boolean actual = animal.getIsEndangered();

        assertEquals(expected, actual);
    }

    @org.junit.Test
    public void setIsEndangered() {
        boolean expected = false;
        boolean actual = animal.getIsEndangered();

        assertEquals(expected, actual);
    }

    @org.junit.Test
    public void getName() {
        String expected = "dog";
        animal.setName("dog");
        String actual = animal.getName();

        assertEquals(expected, actual);
    }

    @org.junit.Test
    public void setName() {
        String expected = "whale";
        animal.setName("whale");
        String actual = animal.getName();

        assertEquals(expected, actual);
    }
}