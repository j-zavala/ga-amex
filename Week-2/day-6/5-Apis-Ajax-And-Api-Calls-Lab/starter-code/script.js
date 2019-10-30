// part 1 - make a function called 'makeCall' that will make an AJAX GET request to 'https://randomuser.me/api/' and console.log the response in the success function - 10 min

const makeCall = function() {
  fetch("https://randomuser.me/api/")
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
      getData(res.results[0]);
    })
    .catch(err => {
      console.log(err);
    });
};

// part 2 - write a function called getData that will parse the results from the ajax request and set new variables for the user's first name, last name, email, dob, street, city, state, address, phone, password, and image.
// Call this function from the success method of your AJAX call. - 15 min

const getData = function(data) {
  const fName = data.name.first;
  const lName = data.name.last;
  const email = data.email;
  const dob = data.dob.date;
  const street = data.location.street;
  const city = data.location.city;
  const state = data.location.state;
  const phone = data.cell;
  const password = data.login.password;
  const image = data.picture.thumbnail;

  manipulateDom(
    `${fName} ${lName}`,
    email,
    dob,
    `${street} ${city} ${state}`,
    phone,
    password,
    image
  );
};

// part 3 - write a function called manipulateDom that will accept the name, email, dob, address, phone, pw, and image as arguments.
// Assign these values as data attributes to the html elements as follows.
// the element with the id of 'bigtext' should have the the user's name for its text
// the element with the id of 'photo' should have the user's image for it's background-image
// the element with he id of 'name' should have the user's name for its data attribute
// the element with the id of 'email' should have the user's email for its data attribute
// the element with the id of 'birthdate' should have the user's birthdate for its data attribute
// the element with the id of 'address' should have the user's address for its data attribute
// the element with the id of 'phone' should have the user's phone for its data attribute
// the element with the id of 'password' should have the user's password for its data attribute
// call this function from inside `getData` and pass in the appropriate values - 20 min

const manipulateDom = function(name, email, dob, address, phone, pw, img_url) {
  document.getElementById("bigtext").innerText = name;
  document.getElementById("photo").style.backgroundImage = `url(${img_url})`;
  document.getElementById("email").innerText = email;
  document.getElementById("birthdate").innerText = dob;
  document.getElementById("address").innerText = address;
  document.getElementById("phone").innerText = phone;
  document.getElementById("password").innerText = pw;

  
};

// part 4 - write a click handler for the button that will call the makeCall function - 5 min
document.querySelector("button").addEventListener("click", makeCall);

// part 5 - write a function called addEventListeners that will add hover listeners for the icons on the page - 10 min
//
// when hovering over #name, the #smalltext should say 'My name is', and the #bigtext should use the #name's data attribute for its text
// when hovering over #email, the #smalltext should say 'My email is', and the #bigtext should use the #email's data attribute for its text
// when hovering over #birthdate, the #smalltext should say 'My birthday is', and the #bigtext should use the #birthdate's data attribute for its text
// when hovering over #address, the #smalltext should say 'My addresss is', and the #bigtext should use the #address's data attribute for its text
// when hovering over #phone, the #smalltext should say 'My phone number is', and the #bigtext should use the #phone's data attribute for its text
// when hovering over #password, the #smalltext should say 'My password is', and the #bigtext should use the #password's data attribute for its text

function addEventListeners() {
  document.getElementById("phone").addEventListener("mouseover", e => {
    smallText.innerText = "My phone number is ";
    bigText.innerText = e.target.dataset.photo;
  });
}

makeCall();
