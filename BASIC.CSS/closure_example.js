function createBankAccount(intialBalance){
    let balance= intialBalance;

    return{
        deposit(value){
            balance += value;
            console.log(`Deposited : ${value} , current Balance :${balance}`);
        },
         withdraw(value){
            balance -= value;
            console.log(`withdraw: ${value} , current Balance :${balance}`);
        },
        checkBalance(){
            console.log(`current Balance: ${balance}`);
        },
    };
}
let user=createBankAccount(100);
user.deposit(50);
user.withdraw(60);
user.checkBalance();

console.log(user.balance); // undefined





// function createCounter(intialValue){
//       let count=intialValue; 
      
//       return{
//         increase(value){
//             count+=value;
//             console.log(` After increasing: ${count}`);
//         },
//         decrease(value){
//             count-=value;
//             console.log(` After decreasing: ${count}`);
//         },
//         reset(){
//             count=0;
//             console.log(`After reset: ${count}`);
//         },
//       };
// }
// let counter=createCounter(15);
// counter.increase(5);
// counter.decrease(5);
// counter.reset();





// function VendingMachine() {
//     let insertedValue = 0;

//     let inventory = {
//         soda: { price: 50, stock: 5 },
//         chips: { price: 20, stock: 3 }
//     };
//     return{
//       insertCoin(coin){
//         insertedValue += coin;
//         console.log(`inserted value :${insertedValue}`);
//       },

//       buyItem(item){
//         let itemExist = inventory[item];
//         if(itemExist){
//           if(itemExist.price>insertedValue){
//             console.log("Insert more coins!");
//           }
//           else if(itemExist.stock<=0){
//             console.assert.log("bhai khatam ho gya ");
//           }
//           else{
//             insertedValue -=itemExist.price;
//             itemExist.stock -=1;
//             console.log("mil gya bhai tere item !!!");
//           }
//         }
//       },
//     };
//   }

//  let user = VendingMachine();
//   user.insertCoin(20);
//   user.buyItem("chips");

