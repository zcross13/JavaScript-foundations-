const userName = "John"

let admin = userName; 

alert(admin);

const ourPlanetName = "Earth"; 

let currentUserName = "Eric";



let name = "Ilya";

alert( `hello ${1}` ); // hello 1 

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya 



// Pratice 

const myName = "Zee";

const myAge = 31; 

isLearning = true; 

alert(`My name is ${myName} and I am ${myAge} years old. I am trying to gain a deeper understanding of JavaScript: ${isLearning}`);



// day 2 
function canYouVote(age){
    if(age >= 18){
        return alert("you can vote");
    }
    else {
        return alert("you cannot vote"); 
    }
}