// function greet (name){               //function defination
//     return" Hello," + name +"!";
// }

// let message=greet("ankit");
// console.log(message);




// function greet (name){
//     // return" Hello," + name +"!";
//     return `Hello,${name} !`;                   //template literal
// }
// let message=greet("ankit");
// console.log(message);



//function expression
function greet (name){
    return" Hello," + name +"!";
}

let message=greet("ankit");
console.log(message);

const expression =function(name){
    return`Hello,${name}!`;
};
console.log(expression("neha"));

//function arrow
const arrowFunc=(name)=>{
    return`Hello,${name}!`;
};
console.log(arrowFunc("rajan"));



//add two number
const Add=(a,b)=>{
    return `sum=${a+b}`;
}
console.log(Add(5,3));

//
// ak object banno
let user={
    name:"Rajan",
    age:23,
    dog:function(){
        return "Bark";
    }
};
user.subject="Dsa";
user["grade"]=80;
user["marks"]=406;
console.log(user);
console.log(user.dog());

// higher order function
function sayGoodbye(){
console.log("Goodbye");
}

function executeAction(action){
    console.log("Executing action...");
    action();
}
executeAction(sayGoodbye);

