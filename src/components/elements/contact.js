import { appendChildren } from "./../helpers";
import { contacts } from "./../contacts";

let contactBox = document.createElement("div");
contactBox.id = "contact-box";

for (let i of contacts) {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let img = document.createElement("img");
    let a = document.createElement("a");

    div.className = "custom-effect";
    h3.innerHTML = i.title;
    img.src = i.img;
    img.title = i.text;

    a.href = i.link;
    a.target = "_blank";
    a.appendChild(img);

    appendChildren(div, a, h3);

    contactBox.appendChild(div);

}

export function contactElement() {
    let contact = document.createElement("div");
    contact.id = "contact";
    let title = document.createElement("h2");
    title.innerHTML = "CONTACT ME";
    title.className = "sticky";
    let par1 = document.createElement("p");
    par1.innerHTML = "Drop me a line or contact me via social media:";
    appendChildren(contact, title, par1, contactBox);
    return contact;
}