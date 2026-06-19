let user={
    name:"alice",
    age:25,
    isStudent: true,
"":"empty string",
" ":"space key",
"last name":"max",};

console.log(user);
console.log(user.name);
console.log(user.age);
// console.log(user.' ');          //error   

console.log(user["name"]);
console.log(user["age"]);         //empty string key and spacekey not accessed by .

console.log(user[""]);
console.log(user[" "]);
console.log(user["last name"]);
                                // key containing space not accessed by .



