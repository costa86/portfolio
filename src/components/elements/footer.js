import { appendChildren } from "./../helpers";

export function footerElement() {
    let footer = document.createElement("div");
    footer.id = "footer";
    footer.innerHTML = "Handcrafted by Lourenço Costa";
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let br = document.createElement("br");

    img1.title = img1.alt = "JavaScript (nothing fancy, just DOM stuff)";
    img2.title = img2.alt = "SASS (Grid is awesome!)";
    img3.title = img3.alt = "WebPack";
    img1.src = "https://img.icons8.com/color/48/000000/javascript-logo-1.png";
    img2.src = "https://img.icons8.com/color/48/000000/sass.png"
    img3.src = "https://img.icons8.com/dusk/48/000000/webpack.png";
    appendChildren(footer, br, img1, img2, img3);
    return footer;
}
