import { appendChildren } from "./../helpers";

export function mainElement() {
    let main = document.createElement("div");
    main.id = "main";
    let title = document.createElement("h2");
    let subTitle = document.createElement("h2");
    let intro = document.createElement("h3");
    let par1 = document.createElement("p");
    let par2 = document.createElement("p");
    title.innerHTML = "ABOUT ME";
    title.className = "sticky";
    subTitle.innerHTML = "WEB DEVELOPER";
    intro.innerHTML = "Hi, I am Lourenço Costa. Thanks for visiting my website.";
    par1.innerHTML = "Since you've made this far, I invite you to check some of my projects right below";
    par2.innerHTML = "Also, I do look forward to hearing back from you, so make sure to drop me a line";
    appendChildren(main, title, subTitle, intro, par1, par2);
    return main;
}
