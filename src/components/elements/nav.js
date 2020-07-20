export let nav = document.createElement("div");
nav.id = "nav";

let navLinks = new Map();
navLinks.set("#main", "ABOUT ME");
navLinks.set("#portfolio", "PORTFOLIO");
navLinks.set("#contact", "CONTACT");

for (let i of navLinks.entries()) {
    let a = document.createElement("a");
    a.href = i[0];
    a.innerHTML = i[1];
    nav.appendChild(a);
}

