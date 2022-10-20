"use strict";
const sequenceLength = 4000;
let CachedFibValues = new Array();

Main();

function Main()
{
    let output = "Fibonacci sequence from 0 to " + sequenceLength + " with lookup table:<br>";

    let start = Date.now();
    
    for(let i = 1; i <= sequenceLength; i++)
    {
        output += fib(i);
        if(i != sequenceLength)
            output += ", ";
    }
    
    let operationDuration = Date.now() - start; // milliseconds elapsed since start
    displayResults(output, operationDuration);    
}

function displayResults(output, duration)
{
    document.getElementById("output").innerHTML = output;
    document.getElementById("duration").innerHTML = "Duration: " + duration + "ms";
}

function fib (index)
{
    if(CachedFibValues.length > index)
        return CachedFibValues[index];
    else
    {
        let result;

        if(index == 1 || index == 2)
            result = 1;
        else
            result = fib(index-1) + fib(index-2);

        CachedFibValues[index] = result;
        return result;
    }
}

