import React from "react";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <div className="container-fluid" style={{paddingBottom:"15%"}}>
        
                <div className="row">
                <div className="col-sm-4">
                </div>
                    <div className="col-sm" style={{textAlign:"center", marginTop:"60px"}}>
                        <h1>Web Developer</h1>
                        <h3>Hi, I am Lourenço Costa. Thanks for visiting my website!</h3>

                        <h5>Since you've made this far, I invite you to <Link to="/portfolio"> check some of my projects. </Link>
            Also, I do look forward to hearing back from you, so make sure to <Link to="/portfolio">drop me a line.</Link>
                        </h5>
                    </div>
                    <div className="col-sm-4">
                </div>

                </div>

            </div>

        </>
    );
}