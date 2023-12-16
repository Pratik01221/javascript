// let btn1 =document.querySelector("#btn1");

//  btn1.onclick = (e) =>{
//    console.log(e);  
//    console.log(e.type);
//    console.log(e.target);


//    console.log("btn1 was click");
//     let a=25;
//     a++;
//     console.log(a);
//  };  

// let div = document.querySelector("div");
// div.onmouseover= (evt) => {
//    console.log(evt);
//    console.log("print world");

// }; 
// btn1.addEventListener("click",(e)=>{
//    console.log("btn1 was clicked done successfuly");
//    console.log(e.type);
//    console.log(e.target);
// });

// btn1.addEventListener("click",(e)=>{
//    console.log("done ");
//    console.log(e.type);
//    console.log(e.target);
// });


// btn1.addEventListener("click",()=>{
//   console.log("HANDLER 1 ");  
// });

// btn1.addEventListener("click",()=>{
//   console.log("HANDLER 2 ");  
// });
// const HANDLER = btn1.addEventListener("click",()=>{
//     console.log("HANDLER 3");
    
// });

// // btn1.removeEventListener("click","HANDLER");



// btn1.addEventListener("click",()=>{
   
//    console.log("HANDLER 4");
    
// });


// btn1.removeEventListener("click","HANDLER");




// let btn1=document.querySelector("#btn1");


// btn1.addEventListener("click", () => {
//    console.log("this is - run 1");
// });

// btn1.addEventListener("click", () => {
//    console.log("this is - run 2");
// });

// const run = btn1.addEventListener("click", () => {
//    console.log("this is - run 3");
// });

// btn1.addEventListener("click", () => {
//    console.log("this is - run 4");
// });

// btn1.removeEventListener("click",run);


// -----------------------------------------------------------------------------------------------
// PRACTICE QUESTIONS---

// create togle button that change the screen to dark-mode when click & light- mode when click again

let modeBtn=document.querySelector("#mode");
let curMode="light";
console.log("YOUR TRYING TO CHANGE MODE");
let body=document.querySelector("body"); 

 modeBtn.addEventListener("click", () => {
    
   if(curMode == "light"){
      curMode="dark";
      // document.querySelector("body").style.background="black";
      body.classList.add("light");
   }else{
      curMode="light";
      // document.querySelector("body").style.background="white";
      body.classList.add("dark");
   }
   console.log(curMode);
 });


//  -----------------------------------------------------------------------------------


