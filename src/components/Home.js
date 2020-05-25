import React from "react";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <div className="center">
                <h1>Web Developer</h1>
                <h3>Thanks for visiting my website!</h3>

                <h4>Since you've made this far, I invite you to <Link to="/portfolio"> check some of my projects. </Link>
            Also, I do look forward to hearing back from you, so make sure to <Link to="/portfolio">drop me a line.</Link>
                </h4>
            </div>

        </>
    );
}