import React from "react";
import { Contact } from "./Contact";
import { Portfolio } from "./Portfolio";
import { Courses } from "./Courses";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export function Navbar() {
    return (
        <>
            <Router>
                <div class="topnav">
                    <a href="/">LC</a>
                    <div class="topnav-right">
                        <Link to="/portfolio">PORTFOLIO</Link>
                        <Link to="/courses">COURSES</Link>
                        <Link to="/contact">CONTACT</Link>
                    </div>
                </div>

                <Switch>
              
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/courses">
                        <Courses />
                    </Route>

                </Switch>

            </Router>
        </>
    );
}