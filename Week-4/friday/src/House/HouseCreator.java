package House;

public abstract class HouseCreator {
    double netWorth;
    double salary;
    double taxRate;
    Pet pet;

    public HouseCreator(double netWorth, double salary, double taxRate, Pet pet) {
        this.netWorth = netWorth;
        this.salary = salary;
        this.taxRate = taxRate;
        this.pet = pet;
    }

    abstract double payTaxes(double salary);

    public void earnMoney() {
        double taxes = payTaxes(this.salary);
        double profit = this.salary - taxes;
        this.netWorth += profit;
    }

    class Mansion extends HouseCreator {

        public Mansion(double netWorth, double salary, double taxRate, Pet pet) {
            super(netWorth, salary, taxRate, pet);
        }

        @Override
        double payTaxes(double salary) {
            return 0;
        }
    }
}
