import React from "react";
import { PortfolioEach } from "./PortfolioEach";
import { barcode, reactAPI } from "./../projects";

export function Portfolio() {

    return (
        <>
            <h1 className="middle">Portfolio</h1>
            <h5 className="middle">Here you can check some of my projects, including demonstrations/downloads to
            use them. You can also access their source codes.
            </h5>
            <div className="middle">
                <a target="_blank" rel='noopener noreferrer' href="https://github.com/costa86?tab=repositories">
                    <button className="btn btn-success">See all projects on my GitHub account</button>
                </a>

            </div>

            <br></br>

            <div className="container">

                <div className="row">
                    <PortfolioEach
                        {...barcode}
                    />
                    <PortfolioEach
                        {...reactAPI}
                    />
                </div>
            </div>
        </>
    );
}