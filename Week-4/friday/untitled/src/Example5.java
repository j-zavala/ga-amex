import java.util.Optional;
import java.util.stream.Stream;

public class Example5 {
    public static void main(String[] args) {
        Stream<Integer> numbers = Stream.of(1,2);
        Optional<Integer> intOptional = numbers.reduce(i,1)->{
            return i * j;
        });

    }
}
