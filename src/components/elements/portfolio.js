import { appendChildren } from "./../helpers";
import { portfolioGrid } from "./portfolioGrid";
import iconGithubSmall from "./../../assets/icons/githubSmall.png"

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
    img.src = iconGithubSmall;
    span.appendChild(img);
    btn.appendChild(span);
    a.appendChild(btn);
    portfolio.id = "portfolio";
    let title = document.createElement("h2");
    let par1 = document.createElement("p");
    let par2 = document.createElement("p");
    let par3 = document.createElement("p");
    let par4 = document.createElement("p");
    par3.style.fontWeight = "bolder";
    par4.style.fontWeight = "bolder";
    title.innerHTML = "PORTFOLIO";
    title.className = "sticky";
    par1.innerHTML = `Here you can get to know my work, as some curated projects.`;
    par3.innerHTML = "Are you an IT professional? Check the source code.";
    par4.innerHTML = "Are you a recruiter/HR professional? Try out the softwares or watch the video-demonstrations.";

    par2.innerHTML = "Alternatively, on the button below you can see my GitHub repository for all the projects:";
    appendChildren(portfolio, title, par1, par4, par3, par2, a, portfolioGrid);
    return portfolio;
}

