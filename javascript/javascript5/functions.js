// functoions is block of code that perform specific task

function sum(x,y){
    s=x+y;
    console.log(s);
}

sum(55,88);

// arrow function-- it is compact way of writing a function

sum=(x,y)=>{
console.log(x+y);
}
sum(55,99);


function countvowels(str){
    let count=0;
    for( const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u");
        {
            count++;
        }
    }
    console.log(count);
}

countvowels("aaaa");

let num=[1,2,3,4,5,6,7,8,9,10];

num.forEach((val)=>{
    console.log(val*val);
});