// // use strict -> secure JS (checks bad syntax)
// "use strict"

// // d=10;   // gives error
// // console.log(d);

// let a=10;   // works normal
// console.log(a);

// // arrow function vs normal functions

// // normal function
// function fun(){
//     console.log("the this is: "+this);  // this is undefined
// }

// fun();

// // arrow function
// let fun2 = ()=>{
//     console.log("its this is: "+this);  // refers to window object
// }

// let a=[1,2,3];

// console.log(a.length);
// let b=a.splice(0,1);
// console.log(a);

let count = 0;
let s = "hello ";
let r = Array.from(s.split(" "));
r.forEach((ele) => {
    if (ele !== "") {
        count++;
    }
});
console.log(count);

