const STANDALONE = "Standalone executable project. Just run it without installing any dependencies";
const CLI = "Interactive user-friendly CLI";

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
        else if (i === "video") {
            img = "./images/play-48.png";
            alt = "Video";
            title = "Watch a video demonstration of this project";
        }
        else if (i === "live") {
            img = "./images/web-48.png";
            alt = "Live";
            title = "See this this project in action";
        }
        else if (i === "download") {
            img = "./images/download-48.png";
            alt = "Download";
            title = "Download this project";
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

// GOT API
let gotImages = {
    "github": "https://github.com/costa86/game-of-thrones-api",
    "video": "https://www.youtube.com/watch?v=fy6pXminRLU"
};

let gotStack = [
    "Python",
    "HTML + CSS",
    "Bash",
    "Docker",
    "Flask",
    "MongoDB",
    "Terraform"
];
let gotFeatures = [
    "Get information for an episode",
    "CRUD operations for comments of an episode",
    "Get episodes by rating",
    "Auto-deploy API to production cloud server with Terraform",
    "API Documentation available at: https://documenter.getpostman.com/view/18638297/UVJhDEuV"
];

let gotProject = createPortfolioCard(
    gotStack,
    "GAME OF THRONES API",
    "Containerized API to serve episodes related to the TV show Game of Thrones. This project was featured at Docker All-Hands #4, on Dec 09, 2021 (check the video)",
    gotFeatures, gotImages
);

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
    "Saves user's coordenates.",
    "Navigates to the place where the product was scanned.",
    "Shares the product search result via sms, email, social media, etc.",
    "Redirects to product page on the online store."
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
let missingPeopleFeatures = ["Page is opened with QR code.", "Secretly sends email with latitude and longitude via email."];
let missingPeopleProject = createPortfolioCard(
    missingPeopleStack,
    "MISSING PEOPLE FINDER",
    "Web page designed to help finding missing people",
    missingPeopleFeatures,
    missingPeopleImages
);
//

// Movie search
let movieSearchImages = {
    "github": "https://github.com/costa86/react-api",
    "live": "https://costa86.github.io/react-api",
    "video": "https://share.vidyard.com/watch/FFPuX2ERuAoqiV9QDFixXN?"
};
let movieSearchStack = ["HTML + CSS + SASS", "JavaScript + React"];
let movieSearchFeatures = ["Search for a movie/serie.", "See list of results.", "See each movie's details page."];
let movieSearchProject = createPortfolioCard(
    movieSearchStack,
    "MOVIE SEARCH",
    "Web app to search and display information about movies, TV shows and games. The data is obtained from an API",
    movieSearchFeatures,
    movieSearchImages
);
//

// Uphold
let upholdImages = {
    "github": "https://github.com/costa86/uphold_clone",
    "video": "https://share.vidyard.com/watch/m8wJe5jLH91bwfc8Wmyg2w?"
};
let upholdStack = ["HTML + CSS", "JavaScript + React"];
let upholdFeatures = ["Converts currencies.", "Uses Uphold's API."];
let upholdProject = createPortfolioCard(
    upholdStack,
    "UPHOLD CLONE",
    "Web app cloning Uphold's interface and functionality, converting currencies by using its API",
    upholdFeatures,
    upholdImages
);

//

//Geography CDN
let CDN = "https://cdn.jsdelivr.net/gh/costa86/cdn_geo@1.1/main.min.js";

let geoCDNImages = {
    "github": "https://github.com/costa86/cdn_geo",
    "download": CDN,
    "live": "https://costa86.github.io/cdn_geo/"
};
let geoCDNStack = ["JavaScript"];
let geoCDNFeatures = [
    "Ready to be inplemented in any HTML document.",
    "Available in minified mode, so it loads faster.",
    "Check distance between 2 coordinates.",
    "Validates latitude and longitude."
];
let geoCDNProject = createPortfolioCard(
    geoCDNStack,
    "GEO JAVASCRIPT CDN",
    "A JavaScript CDN (Content Delivery Network) designed to work with geographic data. Check the source code to see how you can use it in your project",
    geoCDNFeatures,
    geoCDNImages
);

//

//Pip package
let pipImages = {
    "github": "https://github.com/costa86/geographic-worker",
    "download": "https://pypi.org/project/geoworker/"
};
let pipStack = ["Python"];
let pipFeatures = [
    "CI/CD pipeline for new releases",
    "Download: pip install geoworker",
    "Validates latitude and longitude."
];
let pipProject = createPortfolioCard(
    pipStack,
    "GEO PYTHON PACKAGE",
    "Python package designed to work with geographic data",
    pipFeatures,
    pipImages
);
//

//SafePass
let safePassImages = {
    "github": "https://github.com/costa86/safepass",
    "download": "https://github.com/costa86/safepass/blob/main/safepass"
};
let safePassStack = ["Rust", "SQLite"];
let safePassFeatures = [
    "Stores password with encryption in database",
    "Uses file as master key",
    "Interactive user-friendly CLI",
    "Ideal for storing passwords to streaming services",
    STANDALONE
];
let safePassProject = createPortfolioCard(
    safePassStack,
    "SAFEPASS",
    "Password manager",
    safePassFeatures,
    safePassImages
);
//


//Rust json-parser
let jsonParserImages = {
    "github": "https://github.com/costa86/jfp",
    "download": "https://github.com/costa86/jfp/blob/main/jfp"
};
let jsonParserStack = ["Rust"];
let jsonParserFeatures = [
    "Parse json files",
    STANDALONE
];
let jsonParserProject = createPortfolioCard(
    jsonParserStack,
    "JFP",
    "CLI to parse json files",
    jsonParserFeatures,
    jsonParserImages
);
//


//Rust SQL to-do
let toDoImages = {
    "github": "https://github.com/costa86/rust-to-do-with-sql",
    "download": "https://github.com/costa86/rust-to-do-with-sql/blob/master/tasks"
};
let toDoStack = ["Rust", "SQLite"];
let toDoFeatures = [
    "List, add, delete and edit activities in a table format",
    "Activities are stored on SQL database",
    STANDALONE
];
let toDoProject = createPortfolioCard(
    toDoStack,
    "MY ACTIVITY LIST",
    "CLI to manage a to-do list",
    toDoFeatures,
    toDoImages
);
//

//Rust GitAuto
let gitAutoImages = {
    "github": "https://github.com/costa86/autogit",
    "download": "https://github.com/costa86/autogit/blob/main/autogit"
};
let gitAutoStack = ["Rust"];
let gitAutoFeatures = [
    "List repositories",
    "Create repository",
    "Delete repository",
    "List Gists",
    CLI,
    STANDALONE
];
let gitAutoProject = createPortfolioCard(
    gitAutoStack,
    "AUTOGIT",
    "Automation of GitHub procedures",
    gitAutoFeatures,
    gitAutoImages,
);
//

//Shecret
let shecretImages = {
    "github": "https://github.com/costa86/shecret",
    "download": "https://github.com/costa86/shecret/blob/master/shecret",
    "video": "https://asciinema.org/a/gWB0W7h4BER9Raaq4DzpNEsYk"
};
let shecretStack = ["Rust", "SQLite"];
let shecretFeatures = [
    "Start SSH connection",
    "Start SFTP connection",
    "Create SSH keys",
    "List connections",
    CLI,
    STANDALONE
];
let shecretProject = createPortfolioCard(
    shecretStack,
    "SHECRET",
    "SSH and SFTP Client",
    shecretFeatures,
    shecretImages
);
//

portfolioGrid.appendChild(gitAutoProject);
portfolioGrid.appendChild(shecretProject);
portfolioGrid.appendChild(jsonParserProject);
portfolioGrid.appendChild(safePassProject);
portfolioGrid.appendChild(toDoProject);
portfolioGrid.appendChild(gotProject);
portfolioGrid.appendChild(movieSearchProject);
portfolioGrid.appendChild(upholdProject);

// portfolioGrid.appendChild(barcodePriceProject);
// portfolioGrid.appendChild(missingPeopleProject);
// portfolioGrid.appendChild(geoCDNProject);
// portfolioGrid.appendChild(pipProject);  


addContactCard("Drop me an email", "./images/email-48.png", "Email", "mailto:costa2016@pm.me", "costa2016@pm.me");
addContactCard("Give me a call (whatsapp and signal)", "./images/phone-48.png", "Phone", "tel:+351920438006", "(+351) 920 438 006");
addContactCard("Add me on LinkedIn", "./images/linkedin-48.png", "LinkedIn", "https://www.linkedin.com/in/costa86/", "linkedin.com/in/costa86");
addContactCard("Check all my projects", "./images/github-48.png", "GitHub", "https://github.com/costa86", "github.com/costa86");
addContactCard("See my articles on dev.to", "./images/article-48.png", "Articles", "https://dev.to/costa86", "dev.to/costa86");
addContactCard("My published Rust projects", "./images/download-48.png", "Rust crates", "https://crates.io/users/costa86", "crates.io/users/costa86");


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

function goUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = () => scrollFunction();
goToTopIcon.onclick = () => goUp();