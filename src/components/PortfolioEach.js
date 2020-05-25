import React from "react";
export function PortfolioEach(props) {

    return (
        <>
            <tr>
                <td>{props.title}</td>
                <td>{props.description}</td>
                <td>{props.stack}</td>
                <td>{props.features}</td>
                <td>
                    <a href={props.demo} rel='noopener noreferrer' target="_blank">
                        <span >
                            <img className="zoom" src={props.imgDemo} alt={props.title} title={props.title + " (Demo)"} />
                        </span>
                    </a>
                </td>
                <td>
                    <a href={props.source} rel='noopener noreferrer' target="_blank">
                        <span >
                            <img className="zoom" src={props.imgSource} alt={props.title} title={props.title + " (Source code)"} />
                        </span>
                    </a>
                </td>
            </tr>
        </>
    );
}