import React from "react";
export function ContactType(props) {

    return (
        <>
            <div className="list-group-item">
                <a href={props.link} rel='noopener noreferrer' target="_blank">
                    <span >
                        <img className="zoom" src={props.img} alt={props.title} title={props.title} />
                    </span>
                </a> 
                {props.text}
            </div>
        </>
    );
}