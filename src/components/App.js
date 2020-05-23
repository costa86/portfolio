import React from "react";
import { Navbar } from "./Navbar";

export function App() {
    return (
        <>
            <Navbar />
            <h1>Hello</h1>
            <h3 className="code">let a = "oi";</h3>
            <code>let a = "frge"</code>
        </>
    );
}