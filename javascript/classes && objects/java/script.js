// OBJECTS---

const student1={
    fullname:"pratik garad",
    marks:88,
    printmarks: function(){
        console.log("marks", this.marks);
    }

};

const student2={
    fullname:"pratik garad",
    marks:88
}

student2.__proto__=student1;

// ------------------------------------------------------------------------------

// classes 

class toyotacar{
    start(){
        console.log("start the car");
    }

    stop(){
        console.log("stop the car");
    }
};

let bajaj = new toyotacar();
let maruti = new toyotacar();

// ---------------------------------------------------------------------------------

// CONSTRUCTOR


