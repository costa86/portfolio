import React from "react";
import { PortfolioEach } from "./PortfolioEach";

export function Portfolio() {

    const barcode = {
        title: "BARCODE PRICE",
        description: `Android mobile app that scans products' barcodes 
        and finds better deals for them on online stores.`,
        stack: "Java, Android, SQLite",
        demo: "https://play.google.com/store/apps/details?id=com.costa86.barcodeprice",
        source: "https://github.com/costa86/BarcodePrice",
        imgDemo: "https://img.icons8.com/color/60/000000/google-play.png",
        imgSource: "https://img.icons8.com/material-outlined/60/000000/github.png",
        imgTitle: "https://img.icons8.com/color/40/000000/android-os.png",
        htmlTitle: "Download this app on Google Play",
        features: (
            <ul>
                <li>Saves user's coordenates</li>
                <li>Navigates to the place where the product was scanned</li>
                <li>Shares the product search result via sms, email, social media, etc</li>
                <li>Redirects to product page on the online store</li>
            </ul>)
    };

    const reactAPI = {
        title: "REACT WITH API FETCH",
        description: `Web app to search and display information about movies. 
        The data is obtained from an API`,
        stack: "JavaScript, React, SASS, Bootstrap",
        demo: "https://costa86.github.io/react-api",
        source: "https://github.com/costa86/react-api",
        imgDemo: "https://img.icons8.com/color/60/000000/internet.png",
        imgSource: "https://img.icons8.com/material-outlined/60/000000/github.png",
        imgTitle: "https://img.icons8.com/color/40/000000/react-native.png",

        htmlTitle: "See this website in action",
        features: (
            <ul>
                <li>Search for a movie/serie</li>
                <li>See list of results</li>
                <li>Shares the product search result via sms, email, social media, etc</li>
                <li>Redirects to product page on the online store</li>
            </ul>)
    };

    return (
        <>
            <h1 className="middle">Portfolio</h1>
            <h5 className="middle">Here you can check some of my projects, including demonstrations/downloads to
            use them. You can also access their source codes.
            </h5><br></br>

            <div className="container">
                <div className="row">
                    <PortfolioEach
                        {...barcode}
                    />
                    <PortfolioEach
                        {...reactAPI}
                    />
                    <PortfolioEach
                        {...barcode}
                    />
                </div>
            </div>
        </>
    );
}