import "./style/style.scss";
import { appendChildren } from "./components/helpers";

import { contactElement } from "./components/elements/contact";
import { footerElement } from "./components/elements/footer";
import { mainElement } from "./components/elements/mainElement";
import { nav } from "./components/elements/nav";
import { portfolioElement } from "./components/elements/portfolio";


let root = document.getElementById("root");

appendChildren(root, nav, mainElement(), portfolioElement(),
    contactElement(), footerElement());
