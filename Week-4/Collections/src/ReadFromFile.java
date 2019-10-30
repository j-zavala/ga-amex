import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList; // import the ArrayList class

public class ReadFromFile {
    public static void main(String args[])
    {
        ArrayList<String> newArr = new ArrayList<String>(); // Create an ArrayList object
        String file = "/Users/johnnyzavala/Desktop/personal-amex/Week-4/Collections/src/data.txt";
        try {
//          to open the file object
            FileReader inputFile = new FileReader(file);

//          to obtain the content inside the file
            BufferedReader bufferedReader = new BufferedReader(inputFile);

//          to get a line at time
            String line;

//            if it is not empty, read file, one line at a time
            while ((line = bufferedReader.readLine())!= null) {
                System.out.println(line);
                newArr.add(line);

            }
            //close the file so no one has access to the memory
            bufferedReader.close();
//          in case of an error, record the error message
        } catch(Exception e) {
            System.out.println(e.getMessage());
        }
    }
}


