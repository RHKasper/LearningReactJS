// This script prompts the user to enter a name, asks them to confirm it, then outputs it.


let nameString = prompt("Please enter your name");
confirm(`Please confirm your name is ${nameString}`);
alert(`Your name is ${nameString}`);