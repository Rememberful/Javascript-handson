// ----------------------------
// ❌ CALLBACK HELL EXAMPLE
// ----------------------------
function step1(cb) {
    setTimeout(() => cb(null, "Step 1 done"), 500);
}
function step2(cb) {
    setTimeout(() => cb(null, "Step 2 done"), 500);
}
function step3(cb) {
    setTimeout(() => cb(null, "Step 3 done"), 500);
}

// Callback Hell (Pyramid of Doom)
step1((err, res1) => {
    console.log(res1);
    step2((err, res2) => {
        console.log(res2);
        step3((err, res3) => {
            console.log(res3);
            console.log("Finished with CALLBACK HELL");
        });
    });
});


// ----------------------------
// ✅ PROMISE SOLUTION
// ----------------------------
function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Step 1 done"), 500);
    });
}

function step2Promise() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Step 2 done"), 500);
    });
}

function step3Promise() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Step 3 done"), 500);
    });
}

// Using Promises (Clean chain)
step1Promise()
    .then(res => {
        console.log(res);
        return step2Promise();
    })
    .then(res => {
        console.log(res);
        return step3Promise();
    })
    .then(res => {
        console.log(res);
        console.log("Finished with PROMISES");
    });


// ----------------------------
// ✅ ASYNC / AWAIT SOLUTION
// ----------------------------
async function runSteps() {
    const res1 = await step1Promise();
    console.log(res1);

    const res2 = await step2Promise();
    console.log(res2);

    const res3 = await step3Promise();
    console.log(res3);

    console.log("Finished with ASYNC/AWAIT");
}

runSteps();
