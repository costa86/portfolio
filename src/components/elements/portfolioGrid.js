import { projects } from "./../projects";
import { appendChildren } from "./../helpers";

export let portfolioGrid = document.createElement("div");
portfolioGrid.id = "portfolio-grid";

for (let i of projects) {
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let imgMain = document.createElement("img");
    let imgSource = document.createElement("img");
    let imgDemo = document.createElement("img");
    let aDemo = document.createElement("a");
    let aSource = document.createElement("a");
    let pDesc = document.createElement("p");
    let pStack = document.createElement("p");
    let ulFeatures = document.createElement("ul");

    for (let n of i.features) {
        let li = document.createElement("li");
        li.innerHTML = n;
        ulFeatures.appendChild(li);

    }

    pDesc.innerHTML = i.description;
    pStack.innerHTML = i.stack;

    div.className = "card custom-effect";
    h3.innerHTML = i.title;
    imgMain.src = i.imgTitle;
    imgDemo.src = i.imgDemo;
    imgDemo.className = imgSource.className = "imgPlus";
    imgDemo.title = i.htmlTitle;
    imgSource.src = i.imgSource;
    imgSource.title = i.sourceText;
    aSource.href = i.source;
    aDemo.href = i.demo;
    aSource.target = aDemo.target = "_blank";

    aSource.appendChild(imgSource);
    aDemo.appendChild(imgDemo);

    appendChildren(div, imgMain, h3, pDesc, document.createElement("hr"),
        pStack, document.createElement("hr"), ulFeatures, document.createElement("hr"),
        aDemo, aSource
    )

    portfolioGrid.appendChild(div);

}

