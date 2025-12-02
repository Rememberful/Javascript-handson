let p1 = new Promise((resolve, reject) => {
    console.log("Promise not resolved");
    setTimeout(() => {
        resolve(1);
    }, 2000);
});

p1.then(()=>{
    console.log("Promise resolved");
});

p1.then(()=>{
    console.log("Hey");
});