function addContactCard(title, src, alt, href, html) {
    let target = document.getElementById("contact-grid");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let a = document.createElement("a");
    div.className = "contact-card";
    a.title = title;
    img.src = src;
    img.alt = alt;
    a.href = href;
    a.target = "_blank";
    a.innerHTML = html;
    div.appendChild(img);
    div.appendChild(a);
    target.appendChild(div);
}


let createAnyElement = x => document.createElement(x);


function createPortfolioCard(stack, h2, p, features, imageMap = {}) {
    let div = document.createElement("div");
    let h2Elem = document.createElement("h2");
    let pElem = document.createElement("p");
    let featuresElem = document.createElement("h4");
    let stackElem = document.createElement("h4");

    for (let i in imageMap) {
        let img = gitHub.img;
        let alt = gitHub.alt;
        let title = gitHub.title;

        if (i === "android") {
            img = "./images/google-play-48.png";
            alt = "Google Play";
            title = "Download this app on Google Play";
        }
        else if (i === "article") {
            img = "./images/article-48.png";
            alt = "Article";
            title = "Read an article about this project";
        }

        let image = createAnchorWithImage(imageMap[i], img, alt, title);
        div.appendChild(image);

    }


    div.appendChild(createAnyElement("hr"));

    featuresElem.innerHTML = "FEATURES:";
    stackElem.innerHTML = "STACK:";

    let ul = document.createElement("ul");
    let ulFeatures = document.createElement("ul");


    for (let i of stack) {
        let li = document.createElement("li");
        li.innerHTML = i;
        ul.appendChild(li);
    }

    for (let i of features) {
        let li = document.createElement("li");
        li.innerHTML = i;
        ulFeatures.appendChild(li);
    }

    h2Elem.innerHTML = h2;
    pElem.innerHTML = p;
    div.className = "card";
    div.appendChild(createAnyElement("br"));
    div.appendChild(h2Elem);
    div.appendChild(createAnyElement("br"));

    div.appendChild(pElem);
    div.appendChild(createAnyElement("br"));
    div.appendChild(createAnyElement("hr"));
    div.appendChild(createAnyElement("br"));
    div.appendChild(stackElem);
    div.appendChild(createAnyElement("br"));

    div.appendChild(ul);

    div.appendChild(createAnyElement("br"));
    div.appendChild(createAnyElement("hr"));
    div.appendChild(createAnyElement("br"));
    div.appendChild(featuresElem);
    div.appendChild(createAnyElement("br"));
    div.appendChild(ulFeatures);
    div.appendChild(createAnyElement("br"));
    return div;
}


function createAnchorWithImage(href, src, alt, title) {
    let a = document.createElement("a");
    let img = document.createElement("img");
    a.href = href;
    a.target = "_blank";
    img.src = src;
    img.alt = alt;
    img.title = title;
    a.appendChild(img);
    return a;

}


let portfolioGrid = document.getElementById("portfolio-grid");

let gitHub = {
    "img": "./images/github-48.png",
    "alt": "GitHub",
    "title": "Check the source code"
}

// Django with docker
let djangoImages = {
    "github": "https://github.com/costa86/django_docker"
};

let djangoStack = ["Python + Django", "HTML + CSS + SASS", "Bash", "Docker", "PostgreSQL + SQLite"];
let djangoFeatures = ["Automated processes with bash"];
let djangoProject = createPortfolioCard(djangoStack, "DJANGO APP WITH DOCKER", "Containarized full stack web app", djangoFeatures, djangoImages);

// Barcode price checker
let barcodeImages = {
    "github": "https://github.com/costa86/BarcodePrice",
    "android": "https://play.google.com/store/apps/details?id=com.costa86.barcodeprice"
};
let barcodePriceDownload = createAnchorWithImage(
    "https://play.google.com/store/apps/details?id=com.costa86.barcodeprice", 
    "./images/google-play-48.png", 
    "Google Play", 
    "Download this app on Google Play"
);
let barcodePriceStack = ["Java", "Android", "SQLite"];
let barcodePriceFeatures = [
    "Saves user's coordenates",
    "Navigates to the place where the product was scanned",
    "Shares the product search result via sms, email, social media, etc",
    "Redirects to product page on the online store"
];
let barcodePriceProject = createPortfolioCard(
    barcodePriceStack,
    "BARCODE PRICE CHECKER", "Native Android mobile app that scans products' barcodes and finds better deals for them on online stores",
    barcodePriceFeatures,
    barcodeImages
);


// Missing people finder
let missingPeopleImages = {
    "github": "https://github.com/costa86/tracking",
    "article": "https://dev.to/costa86/finding-mission-people-with-31-lines-of-javascript-3l2g"
};
let missingPeopleStack = ["JavaScript", "HTML + CSS",];
let missingPeopleFeatures = ["Page is opened with QR code", "Secretly sends email with latitude and longitude via email"];
let missingPeopleProject = createPortfolioCard(
    missingPeopleStack,
    "MISSING PEOPLE FINDER",
    "Web page designed to help finding missing people",
    missingPeopleFeatures,
    missingPeopleImages
);
//

// React movie search
let movieSearchImages = {
    "github": "https://github.com/costa86/react-api",
};
let movieSearchStack = ["HTML + CSS", "JavaScript + React"];
let movieSearchFeatures = ["Search for a movie/serie", "See list of results", "See each movie's details page"];
let movieSearchProject = createPortfolioCard(
    movieSearchStack,
    "REACT WITH API FETCH",
    "Web app to search and display information about movies. The data is obtained from an API",
    movieSearchFeatures,
    movieSearchImages
);
//

portfolioGrid.appendChild(djangoProject);
portfolioGrid.appendChild(barcodePriceProject);
portfolioGrid.appendChild(missingPeopleProject);
portfolioGrid.appendChild(movieSearchProject);

addContactCard("Drop me an email", "./images/email-48.png", "Email", "mailto:costa86@zoho.com", "costa86@zoho.com");
addContactCard("Give me a call (whatsapp and signal)", "./images/phone-48.png", "Phone", "tel:+351920438006", "(+351) 920 438 006");
addContactCard("Add me on LinkedIn", "./images/linkedin-48.png", "LinkedIn", "https://www.linkedin.com/in/costa86/", "linkedin.com/in/costa86");
addContactCard("Check all my projects", "./images/github-48.png", "GitHub", "https://github.com/costa86", "github.com/costa86");
addContactCard("See my articles on dev.to", "./images/article-48.png", "Articles", "https://dev.to/costa86", "dev.to/costa86");

let goToTopIcon = document.getElementById("goToTop");

function scrollFunction() {
    let limit = 20;
    let checkBox = document.getElementById("check");
    if (document.body.scrollTop > limit || document.documentElement.scrollTop > limit) {
        goToTop.style.display = "block";
        checkBox.checked = false;
    } else {
        goToTop.style.display = "none";
    }
}

function goUp(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;  
}

window.onscroll = () => scrollFunction();
goToTopIcon.onclick = () => goUp();