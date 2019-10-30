// Using an object constructor, write an object 'Person' that has a name
// an age, a favorite food, and an array of favorite movies.
// Write methods for the object that will print out the person's
// name, age, and favorite food, and write a method to add a movie to
// the person's favorite movies.

const Person = {
  name: "Johnny",
  age: 24,
  food: "ceviche",
  movies: ["Transformers", "Bumblebee", "Alien"],
  printOut: function() {
    console.log(
      `Name is ${this.name}. Age is ${this.age}. Favorite food is ${this.food}.`
    );
  },
  addMovie: function() {
    
  }
};

Person.printOut();
