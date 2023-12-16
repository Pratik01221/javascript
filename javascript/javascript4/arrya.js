// let marks=[96, 75, 48, 83, 66];
// console.log(marks);
// console.log(marks.length);
// console.log(typeof marks);


// let herose=["ironman","thor","shaktiman","spidarman"];
// console.log(herose);
// console.log(herose.length);
// console.log(typeof herose);


// // generally it is not used 


// let product=["pen",55,"notebook",55];
// console.log(product);
// console.log(product.length);
// console.log(typeof product);




/// Array Indices


// let marks=[96, 75, 48, 83, 66];
// console.log(marks);

// marks[0]
// marks[1]
// marks[2]
// marks[3]



// looping over an arrya

// for loop
// let marks=[96, 75, 48, 83, 66];

// for( let i=0; i<marks.length; i++){
    // console.log(marks[i]);
// }

// for of loop

// let marks=[96, 75, 48, 83, 66];

// for(let mark of marks){
//     console.log(mark);
// }


// Calculate the avrage of the students marks

// let marks=[85,97,44,37,76,60];

// let sum=0;
// for (let val of marks){
//     sum+=val;
// }

// console.log(sum);

// let avg = sum / marks.length;
// console.log( "the avrage of marks=",avg);


// practice question
// 5 items ->[250, 645, 300,900, 50] all items have 10% off on item.
// change arrya to store final value.

// let item=[250, 645, 300,900, 50];
// console.log(item);

// item[0]/=10
// item[1]/=10
// item[2]/=10
// item[3]/=10
// item[4]/=10

// console.log(item);

let item=[250, 645, 300,900, 50];
let i= 0;
for( let val of item){
  console.log(`value at index ${i}=${val}`);
  let off= val/10;
  item[i]=item[i] - off;
  console.log(`value after offer =${item[i]}`);
  i++;


}

// console.log(val);