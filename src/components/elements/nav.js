import menuIcon from "./../../assets/icons/menu-back.png";

export let nav = document.createElement("div");
nav.id = "nav";

let navLinks = new Map();
navLinks.set("#main", "ABOUT ME");
navLinks.set("#portfolio", "PORTFOLIO");
navLinks.set("#contact", "CONTACT");


let menu = document.createElement("span");
let menuImg = document.createElement("img");
menuImg.src = menuIcon;
//menu.innerHTML = "MENU"
menu.appendChild(menuImg);
menu.id = "menu";


window.addEventListener("resize", () => {
    let size = window.innerWidth;
    if (size > 500) {
        nav.classList.remove("nav-shown");
        nav.classList.remove("nav-hidden");
    }
    else {
        nav.className = "nav-hidden";
    }
});

let on = true;
menu.addEventListener("click", () => {
    on = !on;
    nav.className = (on) ? "nav-shown" : "nav-hidden";
});

for (let i of navLinks.entries()) {
    let a = document.createElement("a");
    a.href = i[0];
    a.innerHTML = i[1];
    a.addEventListener("click", () => {
        on = !on;
        nav.className = "nav-hidden";
    });
    nav.appendChild(a);
}
nav.appendChild(menu);






