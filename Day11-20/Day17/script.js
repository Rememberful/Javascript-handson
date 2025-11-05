
// 1️⃣ getElementById() - Change color
let heading = document.getElementById("mainHeading");
heading.style.color = "blue";

// 2️⃣ getElementsByClassName() - Change multiple items
let texts = document.getElementsByClassName("text");
for (let t of texts) {
    t.style.color = "green";
}

// 3️⃣ getElementsByTagName() - Change all <p> text
let paragraphs = document.getElementsByTagName("p");
for (let p of paragraphs) {
    p.style.fontWeight = "bold";
}

// 4️⃣ querySelector() - Change first matching element
let firstBox = document.querySelector(".box");
firstBox.style.backgroundColor = "lightyellow";

// 5️⃣ querySelectorAll() - Change all matching elements
let allTexts = document.querySelectorAll(".text");
allTexts.forEach(item => item.innerText = "Updated text!");
