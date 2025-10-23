// let arr = [2,3,4,5];
//  let a = arr.map((value, index, array)=>{
//     console.log(value, index, array);
//     return value+1;
// })
// console.log(a);

//filter()

// let arr = [2,3,455,66,77];
// let a = arr.filter((value)=>{
//     console.log(value<10);
//     return value;
// })
// console.log(a);

// let arr = [2,3,455,66,77];
// let a = arr.filter((value)=>{
//     return value<10;
// })
// console.log(a);

//Reduce()

let arr = [1,4,5,6];
const reduce_fun = (h1,h2) => {
    return h1+h2;
}
let newarr3 = arr.reduce(reduce_fun)
console.log(newarr3);