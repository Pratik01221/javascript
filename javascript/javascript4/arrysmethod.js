// Methods of arryas 

// let foodItems=["chips","apple","litchi","tomato"];

// 1.push() Add end of arrya.

// foodItems.push("banana","burger","paneer","chips");
// console.log(foodItems);

// 2.pop() Delete from end & return

// console.log(foodItems);
//  let Deleteitems=foodItems.pop();
//   console.log(foodItems);
//   console.log(Deleteitems);/


// 3.Tostring() convert arrya to string

// console.log(foodItems);
// console.log(foodItems.toString());

// 4.concat() join multiple arryas.

// let foodItems=["chips","apple","litchi","tomato"];
// let product=["banana","burger","paneer","chips"];
// let fastFood=["idli","tea","butter"];

// let items=foodItems.concat(product,fastFood);

// console.log(items);

// 5.unshift() Add to start 

// let foodItems=["chips","apple","litchi","tomato"];
// foodItems.unshift("halkefhulke");

// console.log(foodItems);

// 6. shift() delete from start

// let foodItems=["chips","apple","litchi","tomato"];
// let val=foodItems.shift();
// console.log(foodItems);
// console.log("deleted", val);

// 7.slice() return piece of arrya

// let foodItems=["chips","apple","litchi","tomato"];
// console.log(foodItems.slice(0,3));

// splice() chnge original arrya (add,remove,replace)

let num=[1,2,3,4,5,6,7,8,9,10];
num.splice(3,5,55,88);
console.log(num);
