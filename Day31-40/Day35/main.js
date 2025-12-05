// let p = fetch("https://goweather.herokuapp.com/weather/Curitiba");

// p.then((value1)=>{
//     console.log(value1.status);
//     console.log(value1.ok);
//     return value1.json();
// }).then((value2)=>{
//     console.log(value2);
// });



// let data = {
//     name: "John",
//     job: "Developer"
// };

// fetch("https://reqres.in/api/users", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
// })
// .then(response => response.json())
// .then(result => {
//     console.log("Server Response:", result);
// });

async function sendData() {
    let data = {
        name: "John",
        job: "Developer"
    };

    let response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    let result = await response.json();
    console.log("Server Response:", result);
}

sendData();

