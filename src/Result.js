import React from "react";

function Result({computerGuess,input}){
    let result = "";
if(input){
    if(computerGuess<input && input<=10){
        result="Higher";
    }else if(computerGuess>input){
        result = "Lower"
    }else if(computerGuess== input){
        result="you win!!"
    }
    else if(input>10){
        result="Enter a valid number"
    }    
}
    return (
        <h3>You Guessed:{result}</h3>
    )
}
export default Result;