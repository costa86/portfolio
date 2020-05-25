import React from "react";
import { PortfolioEach } from "./PortfolioEach";

export function Portfolio() {

    const barcode = {
        title: "BarCode Price",
        description: `Android mobile app that scans products' barcodes 
        and finds better deals for them on online stores.`,
        stack: "Java, Android, SQLite",
        demo: "https://play.google.com/store/apps/details?id=com.costa86.barcodeprice",
        source: "https://github.com/costa86/BarcodePrice",
        imgDemo: "https://img.icons8.com/color/48/000000/google-play.png",
        imgSource: "https://img.icons8.com/color/48/000000/github.png",
        features: (
            <ul>
                <li>Saves user's coordenates</li>
                <li>Navigates to the place where the product was scanned</li>
                <li>Shares the product search result via sms, email, social media, etc</li>
                <li>Redirects to product page on the online store</li>
            </ul>)
    };

    return (
        <>
            <h1 className="centered">Portfolio</h1>
            <h5 className="centered">Here you can check some of my projects, including demonstrations/downloads to 
            use them. You can also access their source codes.
            </h5><br></br>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>PROJECT</th>
                        <th>DESCRIPTION</th>
                        <th>STACK</th>
                        <th>FEATURES</th>
                        <th>DEMO</th>
                        <th>SOURCE</th>
                    </tr>
                </thead>
                <tbody>
                    <PortfolioEach
                        {...barcode}
                    />
                </tbody>
            </table>

        </>
    );
}