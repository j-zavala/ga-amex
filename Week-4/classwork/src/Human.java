public class Human {
    private int id;
    private String name;
    private String address;
    public Human(int id, String name, String address){
        this.id = id;
        this.name = name;
        this.address = address;
    }
    public Human(int id, String name,){
        this.id = id;
        this.name = name;
    }
    public int getId(){
        return this.id;
    }
    public void setId(int id){
        this.id = id;
    }
    public String getName(){
        return this.name;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getAddress(String address){
        return this.address;
    }
    public void setAddress(String address){
        this.address = address;
    }
    public static void main(String[] args) {
        Human casey = new Human(1,"Casey","123 st");
        Human suresh = new Human(2,"Suresh");
    }
}
