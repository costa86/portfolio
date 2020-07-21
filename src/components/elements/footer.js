import { appendChildren } from "./../helpers";

import iconJS from "./../../assets/icons/javascript.png";
import iconWebpack from "./../../assets/icons/webpack.png";
import iconSASS from "./../../assets/icons/sass.png";


export function footerElement() {
    let footer = document.createElement("div");
    footer.id = "footer";
    footer.innerHTML = "Handcrafted by Lourenço Costa, using:";
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");

    let br = document.createElement("br");

    img1.title = img1.alt = "JavaScript (nothing fancy, just DOM stuff)";
    img2.title = img2.alt = "SASS (CSS Grid is awesome!)";
    img3.title = img3.alt = "WebPack";
    img1.src = iconJS;
    img2.src = iconSASS
    img3.src = iconWebpack;
    appendChildren(footer, br, img1, img3, img2);
    return footer;
}
