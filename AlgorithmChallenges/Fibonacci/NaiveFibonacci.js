"use strict";

const sequenceLength = 40;
let output = "Fibonacci sequence from 0 to " + sequenceLength + ":<br>";

let start = Date.now();

for(let i = 1; i <= sequenceLength; i++)
{
    output += fib(i);
    if(i != sequenceLength)
        output += ", ";
}

let operationDuration = Date.now() - start; // milliseconds elapsed since start
displayResults(output, operationDuration);


function displayResults(output, duration)
{
    document.getElementById("output").innerHTML = output;
    document.getElementById("duration").innerHTML = "Duration: " + duration + "ms";
}

function fib (index)
{
    if(index == 1 || index == 2)
        return 1;

    return fib(index-1) + fib(index-2);
}

