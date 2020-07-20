import { appendChildren } from "./../helpers";
import { portfolioGrid } from "./portfolioGrid";

export function portfolioElement() {
    let portfolio = document.createElement("div");
    let a = document.createElement("a");
    let btn = document.createElement("button");
    let span = document.createElement("span");
    let img = document.createElement("img");
    btn.innerHTML = "GitHub repository";
    a.href = "https://github.com/costa86";
    a.target = "_blank";
    img.title = img.alt = "GitHub repository";
    img.src = "https://img.icons8.com/material-outlined/24/000000/github.png";
    span.appendChild(img);
    btn.appendChild(span);
    a.appendChild(btn);
    portfolio.id = "portfolio";
    let title = document.createElement("h2");
    let par1 = document.createElement("p");
    let par2 = document.createElement("p");
    title.innerHTML = "PORTFOLIO";
    title.className = "sticky";
    par1.innerHTML = "Here you can check some of my work, with live examples and source code as well.";
    par2.innerHTML = "On the button below, you can check my github repository for all the projects";
    appendChildren(portfolio, title, par1, par2, a, portfolioGrid);
    return portfolio;
}

