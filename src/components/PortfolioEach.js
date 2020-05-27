import React from "react";
export function PortfolioEach(props) {

    return (
        <>
            <div className="col-6" style={{ padding: "5px" }}>
                <div className="card border-dark" >
                    <div className="card-header">
                        <span style={{ padding: "5px" }}>
                            <img src={props.imgTitle} alt={props.title} title={props.title} />
                        </span>
                        <strong>{props.title}</strong>
                    </div>

                    <div className="list-group-item">
                        {props.description}
                    </div>
                    <div className="list-group-item">
                        <strong>Stack: </strong>{props.stack}
                    </div>
                    <div className="list-group-item">
                        <strong>Functionalities:</strong> {props.features}
                    </div>
                    <div className="list-group-item">
                        <a href={props.demo} rel='noopener noreferrer' target="_blank">
                            <span >
                                <img className="zoom" src={props.imgDemo} alt={props.title} title={props.htmlTitle} />
                            </span>
                        </a>

                        <a href={props.source} rel='noopener noreferrer' target="_blank">
                            <span >
                                <img className="zoom" src={props.imgSource} alt={props.title} title={props.sourceText} />
                            </span>
                        </a>
                    </div>

                </div>
            </div>

        </>
    );
}