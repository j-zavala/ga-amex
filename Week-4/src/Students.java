public class Student {
    private String firstName;
    private String lastName;
    private char grade;

    public Student(String firstName, String lastName, char grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
    }

    public String getFullName() {
        return firstName + "" + lastName;
    }

    public char getGrade() {
        return grade;
    }
}
