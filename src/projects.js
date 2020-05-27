import React from "react";
import presentation from "./../src/assets/presentation.pdf";

let githubIcon = "https://img.icons8.com/material-outlined/60/000000/github.png";


export const sgfJava = {
    title: "VEHICLE FLEET MANAGEMENT",
    description: `Desktop app to manage vehicle fleets`,
    stack: "Java + Swing",
    demo: "https://github.com/costa86/VehicleFleetManagement/blob/master/GestaoFrota.jar",
    source: "https://github.com/costa86/VehicleFleetManagement",
    imgDemo: "https://img.icons8.com/color/60/000000/java-coffee-cup-logo.png",
    imgSource: githubIcon,
    imgTitle: "https://img.icons8.com/color/40/000000/java-coffee-cup-logo.png",
    sourceText: "See the source code",
    htmlTitle: "Download the ready-to-use software",
    features: (
        <ul>
            <li>Projects page</li>
            <li>Contact page</li>
            <li>Intro page</li>
            <li>Courses (work in progress)</li>
        </ul>)
};

export const portfolio = {
    title: "MY PORTFOLIO (THIS WEBSITE)",
    description: `Web app to for a web developer's portfolio`,
    stack: "JavaScript, React, HTML, CSS, SASS, Bootstrap",
    demo: "https://costa86.github.io/portfolio",
    source: "https://github.com/costa86/portfolio",
    imgDemo: "https://img.icons8.com/color/60/000000/internet.png",
    imgSource: githubIcon,
    imgTitle: "https://img.icons8.com/color/40/000000/react-native.png",
    sourceText: "See the source code",
    htmlTitle: "See this website in action",
    features: (
        <ul>
            <li>Projects page</li>
            <li>Contact page</li>
            <li>Intro page</li>
            <li>Courses (work in progress)</li>
        </ul>)
};

export const reactAPI = {
    title: "REACT WITH API FETCH",
    description: `Web app to search and display information about movies. 
    The data is obtained from an API`,
    stack: "JavaScript, React, HTML, CSS, Bootstrap",
    demo: "https://costa86.github.io/react-api",
    source: "https://github.com/costa86/react-api",
    imgDemo: "https://img.icons8.com/color/60/000000/internet.png",
    imgSource: githubIcon,
    imgTitle: "https://img.icons8.com/color/40/000000/react-native.png",
    sourceText: "See the source code",
    htmlTitle: "See this website in action",
    features: (
        <ul>
            <li>Search for a movie/serie</li>
            <li>See list of results</li>
            <li>See each movie's details page</li>

        </ul>)
};


export const barcode = {
    title: "BARCODE PRICE",
    description: `Android mobile app that scans products' barcodes 
    and finds better deals for them on online stores.`,
    stack: "Java, Android, SQLite",
    demo: "https://play.google.com/store/apps/details?id=com.costa86.barcodeprice",
    source: "https://github.com/costa86/BarcodePrice",
    imgDemo: "https://img.icons8.com/color/60/000000/google-play.png",
    imgSource: githubIcon,
    imgTitle: "https://img.icons8.com/color/40/000000/android-os.png",
    htmlTitle: "Download this app on Google Play",
    sourceText: "See the source code",

    features: (
        <ul>
            <li>Saves user's coordenates</li>
            <li>Navigates to the place where the product was scanned</li>
            <li>Shares the product search result via sms, email, social media, etc</li>
            <li>Redirects to product page on the online store</li>
        </ul>)
};

export const hackaton = {
    title: "HACKATHON PORTO METROPOLITAN AREA",
    description: (
        <>
            Hackathon project presented at MATROLAB AMP hackathon in Porto city, Portugal.
        You can see the presentation <a rel='noopener noreferrer' target="_blank" href={presentation}>here</a> (in portuguese).
        I created tableau data visualizations using data scraped from the web, with Python.
        </>
    ),
    stack: "Python, Tableau",
    demo: "https://public.tableau.com/profile/louren.o.costa#!/vizhome/Factoresdeinflunciarecolhaseletiva-LIPOR2017/DASHBOARD",
    source: "https://gist.github.com/costa86/9fef1fc6129c9fe0c7af04b1e33abc29",
    imgDemo: "https://img.icons8.com/color/60/000000/tableau-software.png",
    imgSource: githubIcon,
    imgTitle: "https://img.icons8.com/color/40/000000/python.png",
    htmlTitle: "See one of the Tableau data visualizations",
    sourceText: "Source code for one of the Python web scrapings",
    features: (
        <ul>
            <li>Presents data on intuitive visualizations</li>
            <li>Plots containers' exact locations on google maps</li>
        </ul>)
};