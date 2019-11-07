'use strict'

var name = prompt('Hello, what is your name?');
alert("Welcome " + name + ", Lets see if you can answer few questions " +
    "about me. You can just answer by typing yes or no.");

var age = prompt('Am I 35 years old?');
// console.log('Age:', age);
age = age.toUpperCase();

if (age === 'NO') {
    alert("That's correct.");
} else {
    alert("I'm 31 years old");
}

var color = prompt('Is orange my favorite color?');
// console.log('Food:', color);
color = color.toUpperCase();

if (color === 'NO') {
    alert("That's correct.");
} else {
    alert('My favorite color is blue.');
}

var country = prompt('Did i grow up in Malaysia?');
// console.log('Country:', country);
country = country.toUpperCase();

if (country === 'NO') {
    alert("That's correct.");
} else {
    alert("No, I grew up in Nepal.");
}

var states = prompt('Have I travelled to more than 40 states?');
// console.log('States:', states);
states.toUpperCase();

if (states === 'NO') {
    alert("That's right.");
} else {
    alert("I have visited 15 states.");
}

var language = prompt('Do I speak 4 languages?');
// console.log('Time:', time);
language = language.toUpperCase();

if (language === 'YES') {
    alert("That's correct.");
} else {
    alert("I speak 4 languages.");
}

