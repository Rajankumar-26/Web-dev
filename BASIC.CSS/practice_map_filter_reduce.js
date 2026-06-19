let words=["apple"," banana","orange"];
let upper=words.map((w)  => w.toUpperCase());
console.log(upper);




let cart =[
    {id:1,name:"laptop",price:100},
    {id:1,name:"mobile",price:200},
    {id:1,name:"computer",price:300}
];
let names=cart.map((item)=> item.name + "=" +item.price);
// let cartname = cart.map(item =>({
//       name:item.name,
//       price:item.price
// }));
// console.log(cartname);
console.log(names);



//show only length(5)
let Name=["apple","banana","cat","elephant","dog"];
let someName=Name.filter(Name=>Name.length>5);
console.log(someName);



//sow age >18
let people=[
  {name:"A",age:16},
   {name:"B",age:22},
    {name:"C",age:17},
     {name:"D",age:14},
];
let result=people.filter(human=>human.age>=18).map(human=>human.name);
console.log(result);






let employee = [
  {id:1, name:"A", salary:80000},
  {id:1, name:"B", salary:30000},
  {id:1, name:"C", salary:20000},
  {id:1, name:"D", salary:50000},
];

let amount  = employee.filter(emp => emp.salary > 30000);
console.log(amount);
//avarage
let totalSalary = employee.reduce((sum, emp) => sum + emp.salary,0);
let averageSalary = totalSalary / employee.length;
console.log(averageSalary);


//count of each word 
let fruits=["Apple","Mango","Apple","Orange","Apple","Man"];
let count = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(count);









