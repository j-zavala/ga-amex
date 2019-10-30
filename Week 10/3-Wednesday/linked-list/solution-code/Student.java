package ListLab;

import java.text.DecimalFormat;

public class Student implements Comparable<Student> {
	private String firstName;
	private String lastName;
	private double gpa;
	
	public Student(String firstName, String lastName, double gpa) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gpa = gpa;
	}
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public double getGpa() {
		return gpa;
	}
	public void setGpa(double gpa) {
		this.gpa = gpa;
	}
	
	@Override
	public String toString() {
		DecimalFormat format = new DecimalFormat("#0.00");
		return String.format("%s %s got a %s", this.firstName, this.lastName, format.format(this.gpa));
	}

	@Override
	public int compareTo(Student other) {
		if(this.gpa < other.getGpa()) {
			return -1;
		} else if(this.gpa > other.getGpa()) {
			return 1;
		}
		return 0;
	}
	
	
}
