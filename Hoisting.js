
//Variable and function declarations are hoisted, just like a baby :)


var x; 

function hoistingCheck(){
    return stuff;
}

console.log(hoistingCheck());  // undefined stuff

var stuff = 5;

console.log(hoistingCheck()); // no longer undefined


function hoistingChecker(){ 
    return foo(); // should be 10
}

console.log(hoistingChecker()) 

function foo () { 
    console.log("this will show beacause the function is hoisted")
    return 10;
}
