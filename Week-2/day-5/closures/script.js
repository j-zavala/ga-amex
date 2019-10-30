// function buildName(name) {
//   let greeting = `Hello ${name} !`;
//   //sayName is the closure
//   let sayName = function() {
//     let welcome = greeting + "Welcome!";
//     console.log(greeting);
//   };
//   return sayName;
// }

// buildName("John");

function buildControl(i) {
  let control = 1;
  let displayContor = function() {
      console.log(contor++);
      con
  };
}

let myContor = buildControl(1);
myContor();
myContor();
myContor();

let otherContor = buildContor(10);
otherContor();
otherContor();
otherContor();

myContor;
