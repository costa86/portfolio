import React from "react";
import { Contact } from "./Contact";
import { Portfolio } from "./Portfolio";
import { Courses } from "./Courses";
import { Home } from "./Home";

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export function Navbar() {
    return (
        <>
            <Router>
                <div class="topnav">
                    <Link to="/">LOURENÇO COSTA</Link>
                    <div class="topnav-right">
                        <Link to="/portfolio">PORTFOLIO</Link>
                        <Link to="/courses">COURSES</Link>
                        <Link to="/contact">CONTACT</Link>
                    </div>
                    
                </div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
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