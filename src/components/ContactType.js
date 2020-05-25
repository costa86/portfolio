import React from "react";
export function ContactType(props) {

    return (
        <>
            <h5>
                <a href={props.link} rel='noopener noreferrer' target="_blank">
                    <span >
                        <img className="zoom" src={props.img} alt={props.alt} title={props.title} />
                    </span>
                </a>
                {props.text}
            </h5>
        </>
    );
}