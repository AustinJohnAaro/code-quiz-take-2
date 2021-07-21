// The array of questions for the game.
var questions = [
  { q: 'The sky is blue.', a: 't' },
  { q: 'There are 365 days in a year.', a: 't' },
  { q: 'There are 42 ounces in a pound.', a: 'f' },
  { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
  { q: 'Bananas are vegetables.', a: 'f' }
];

// We start the game with a score of 0.
var score = 0;

// Loop over every question object
for (var i = 0; i < questions.length; i++) {
  // Display current question to user and ask OK/Cancel
  var answer = confirm(questions[i].q);

  // Compare answers
  if (
    (answer === true && questions[i].a === 't') ||
    (answer === false && questions[i].a === 'f')
  ) {
    // Increase score
    score++;
    // Alert the user
    alert('Correct!');
  } else {
    alert('Wrong!');
  }
}

// Show total at end
alert('You got ' + score + '/' + questions.length);
 

var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var signUpButton = document.querySelector('#sign-up');
var msgDiv = document.querySelector('#msg');
var userEmailSpan = document.querySelector('#user-email');
var userPasswordSpan = document.querySelector('#user-password');

function renderLastRegistered() {
  // Retrieve the last email and password from localStorage using `getItem()`
  var email = localStorage.getItem('email');
  var password = localStorage.getItem('password');

  // If they are null, return early from this function
  if (email === null || password === null) {
    return;
  }

  // Set the text of the 'userEmailSpan' and 'userPasswordSpan' to the corresponding values from localStorage
  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
}

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

signUpButton.addEventListener('click', function(event) {
  event.preventDefault();

  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value;

  if (email === '') {
    displayMessage('error', 'Email cannot be blank');
  } else if (password === '') {
    displayMessage('error', 'Password cannot be blank');
  } else {
    displayMessage('success', 'Registered successfully');

    // Save email and password to localStorage using `setItem()`
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    // Render the last registered email and password
    renderLastRegistered();
  }
});
 

// Creates a variable to hold the count
var count = 0;

// Uses querySelector to select the elements by their ids
var countEl = document.querySelector('#count');
var decrementEl = document.querySelector('#decrement');
var incrementEl = document.querySelector('#increment');

// Displays the current count on the page
function setCounterText() {
  countEl.textContent = count;
}

// Increments the count on click and calls setCounterText()
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// Decrements the count on click and calls setCounterText()
decrementEl.addEventListener('click', function() {
  if (count > 0) {
    count--;
    setCounterText();
  }
});
 
// Creates a variable to hold the count
var count = 0;

// Uses querySelector to select the elements by their ids
var countEl = document.querySelector('#count');
var decrementEl = document.querySelector('#decrement');
var incrementEl = document.querySelector('#increment');

// Displays the current count on the page
function setCounterText() {
  countEl.textContent = count;
}

// Increments the count on click and calls setCounterText()
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// Decrements the count on click and calls setCounterText()
decrementEl.addEventListener('click', function() {
  if (count > 0) {
    count--;
    setCounterText();
  }
});

// Create your HTML Page via DOM Methods here!

// We access the <body> element by using `document.body`
var body = document.body;

// Add a centered h1
// We create HTML elements by passing the element by name to `createElement()`
// and storing the value in a variable
var h1El = document.createElement('h1');

// We add text by using the `textContent` property
h1El.textContent = 'Welcome to my page';

// We add style by using the `setAttribute()` method
h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');

// We append the newly created element to the DOM using `appendChild()`
body.appendChild(h1El);

// Add a centered h2
var h2El = document.createElement('h2');
h2El.textContent =
  'This HTML document was created using JavaScript and Chrome Dev Tools';
h2El.setAttribute('style', 'margin:auto; width:100%; text-align:center;');
body.appendChild(h2El);

// Add a centered image with a centered caption under it
var infoEl = document.createElement('div');
var imgEl = document.createElement('img');
var kittenEl = document.createElement('div');

kittenEl.textContent = 'This is my kitten';

infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', 'http://placekitten.com/200/300');
imgEl.setAttribute('height', 200);
imgEl.setAttribute('width', 200);
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');

body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);

// Add a list of your favorite foods (or other favorites)
var favoriteEl = document.createElement('div');
var listEl = document.createElement('ol');
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var li4 = document.createElement('li');

favoriteEl.textContent = 'My favorite foods are:';
li1.textContent = 'Chicken Fingers';
li2.textContent = 'Pizza';
li3.textContent = 'Burgers';
li4.textContent = 'Sushi';

favoriteEl.setAttribute('style', 'font-size:20px;');
listEl.setAttribute('style', 'background: #888888; padding:20px;');

body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
 

