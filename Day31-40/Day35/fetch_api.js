// ===============================
// 1. Basic GET Request (Promise)
// ===============================

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())   // Step 1: get response, Step 2: extract data
    .then(data => console.log("GET Data:", data))
    .catch(error => console.log("Error:", error));


// =================================
// 2. GET Request (async / await)
// =================================

async function getData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();
        console.log("Async GET:", data);
    } catch (err) {
        console.log("Async Error:", err);
    }
}
getData();


// ===============================
// 3. POST Request (sending data)
// ===============================

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Hello",
        body: "This is a test post",
        userId: 1
    })
})
.then(res => res.json())
.then(data => console.log("POST Response:", data))
.catch(err => console.log("POST Error:", err));


// ======================================================
// 4. POST Request (async/await version)
// ======================================================

async function sendPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: "Async Post", userId: 1 })
        });

        let data = await response.json();
        console.log("Async POST:", data);

    } catch (err) {
        console.log("Async POST Error:", err);
    }
}
sendPost();


// ======================================================
// 5. Handling HTTP errors manually (fetch doesn't fail)
// ======================================================

async function safeFetch() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");

        if (!response.ok) {
            throw new Error("HTTP Error! Status: " + response.status);
        }

        let data = await response.json();
        console.log("Safe Fetch:", data);

    } catch (err) {
        console.log("Handled Error:", err.message);
    }
}
safeFetch();
