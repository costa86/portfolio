const githubIcon = "https://img.icons8.com/material-outlined/60/000000/github.png";

const barcode = {
    title: "BARCODE PRICE",
    description: `Android mobile app that scans products' barcodes 
    and finds better deals for them on online stores.`,
    stack: "Java, Android, SQLite",
    demo: "https://play.google.com/store/apps/details?id=com.costa86.barcodeprice",
    source: "https://github.com/costa86/BarcodePrice",
    imgDemo: "https://img.icons8.com/color/60/000000/google-play.png",
    imgSource: githubIcon,
    imgTitle: "https://img.icons8.com/color/60/000000/android-os.png",
    htmlTitle: "Download this app on Google Play",
    sourceText: "See the source code",

    features: [
        "Saves user's coordenates",
        "Navigates to the place where the product was scanned",
        "Shares the product search result via sms, email, social media, etc",
        "Redirects to product page on the online store",
    ]
};

const sgfJava = {
    title: "VEHICLE FLEET MANAGEMENT",
    description: `Desktop app to manage vehicle fleets (the app is in portuguese)`,
    stack: "Java + Swing",
    demo: "https://github.com/costa86/VehicleFleetManagement/blob/master/GestaoFrota.jar",
    source: "https://github.com/costa86/VehicleFleetManagement",
    imgDemo: "https://img.icons8.com/color/60/000000/java-coffee-cup-logo.png",
    imgSource: githubIcon,
    imgTitle: "https://img.icons8.com/color/60/000000/java-coffee-cup-logo.png",
    sourceText: "See the source code",
    htmlTitle: "Download the ready-to-use software",
    features: [
        "Register vehicles", "employees", "suppliers",
        "Register fuel entries", "maintenances", "accidents",
        "Backup data (.csv)"
    ]

};

const reactAPI = {
    title: "REACT WITH API FETCH",
    description: `Web app to search and display information about movies. 
    The data is obtained from an API`,
    stack: "JavaScript, React, HTML, CSS, SASS",
    demo: "https://costa86.github.io/react-api",
    source: "https://github.com/costa86/react-api",
    imgDemo: "https://img.icons8.com/color/60/000000/internet.png",
    imgSource: githubIcon,
    imgTitle: "https://img.icons8.com/color/60/000000/react-native.png",
    sourceText: "See the source code",
    htmlTitle: "See this website in action",
    features: [
        "Search for a movie/serie",
        "See list of results",
        "See each movie's details page",
    ]
};

const hackaton = {
    title: "HACKATHON PORTO METROPOLITAN AREA",
    description:
        `Hackathon project presented at MATROLAB AMP hackathon in Porto city, Portugal. 
        I created tableau data visualizations using data scraped from the web, with Python`,
    stack: "Python, Tableau",
    demo: "https://public.tableau.com/profile/louren.o.costa#!/vizhome/Factoresdeinflunciarecolhaseletiva-LIPOR2017/DASHBOARD",
    source: "https://gist.github.com/costa86/9fef1fc6129c9fe0c7af04b1e33abc29",
    imgDemo: "https://img.icons8.com/color/60/000000/tableau-software.png",
    imgSource: githubIcon,
    imgTitle: "https://img.icons8.com/color/60/000000/python.png",
    htmlTitle: "See one of the Tableau data visualizations",
    sourceText: "Source code for one of the Python web scrapings",
    features: [
        "Presents data on intuitive visualizations",
        "Plots containers' exact locations on google maps"
    ]
};

const portfolio = {
    title: "MY PORTFOLIO (THIS WEBSITE)",
    description:
        `Portfolio for a web developer`,
    stack: "JavaScript, WebPack, HTML, CSS, SASS",
    demo: "http://www.costa86.com",
    source: "https://github.com/costa86/portfolio",
    imgDemo: "https://img.icons8.com/color/60/000000/internet.png",
    imgSource: githubIcon,
    imgTitle: "https://img.icons8.com/dusk/48/000000/webpack.png",
    htmlTitle: "See the website",
    sourceText: "Source code for my portfolio website",
    features: [
        "Bundled with WebPack",
    ]
};

export let projects = [barcode, sgfJava, reactAPI, hackaton, portfolio];