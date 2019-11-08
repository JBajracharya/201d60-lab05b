'use strict'
var counter = 0;

/* var name = prompt('Hello, what is your name?');
alert("Welcome " + name + ", Lets see if you can answer few questions " +
    "about me. You can just answer by typing yes or no.");

var age = prompt('Am I 35 years old?');
// console.log('Age:', age);
age = age.toUpperCase();

if (age === 'NO') {
    alert("That's correct.");
    counter++;
} else {
    alert("I'm 31 years old");
}

var color = prompt('Is orange my favorite color?');
// console.log('Food:', color);
color = color.toUpperCase();

if (color === 'NO') {
    alert("That's correct.");
    counter++;
} else {
    alert('My favorite color is blue.');
}

var country = prompt('Did i grow up in Malaysia?');
// console.log('Country:', country);
country = country.toUpperCase();

if (country === 'NO') {
    alert("That's correct.");
    counter++;
} else {
    alert("No, I grew up in Nepal.");
}

var states = prompt('Have I travelled to more than 40 states?');
// console.log('States:', states);
states.toUpperCase();

if (states === 'NO') {
    alert("That's right.");
    counter++;
} else {
    alert("I have visited 15 states.");
}

var language = prompt('Do I speak 4 languages?');
// console.log('Time:', time);
language = language.toUpperCase();

if (language === 'YES') {
    alert("That's correct.");
    counter++;
} else {
    alert("I speak 4 languages.");
} */
var farr  = prompt('werharehes');
for (var i = 1; i <= 4; i++) {
    var number = parseInt(prompt('Can you guess a correct number? You only get 4 tries' +
        'to answer this question?'));
    console.log(number);

    if (number === 42) {
        alert('you guessed it right. Its 42');
        counter++;
        break;
    } else if (number < 42) {
        alert('Its too high. Try again');
    } else if (number > 42) {
        alert("It's too high. Try again");
    } else {
        alert("The correct number is 42");
    }
}

var arr = ['squash', 'mango', 'banana', 'orange'];

for (var i = 1; i <= 7; i++) {
    if (i === 7) {
        alert('You used all 6 tries. Correct answers are' +
            ' squash, mango, banana and orange.');
    }
    var guess = prompt("What is the food that I do not like to eat?" +
        "You have 6 tries to answer this.");
    console.log('guess' + [i] + ':', guess);
    

    for (var j = 0; j < arr.length; i++) {

        if (guess === arr[j]) {
            alert('Yes that is correct. Squash, mango, banana and orange' +
                'are the food that I dont like');
            counter++;
            var flag = true;
            break;

            /*
              var flag = true;;
            return true;
            use this as an example to validate your loop.
            */
        }

    }
    if (flag) {
        break;
    }
    console.log('counter:', counter);

}

