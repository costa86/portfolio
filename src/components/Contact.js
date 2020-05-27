import React from "react";
import { ContactType } from "./ContactType";

export function Contact() {

    return (
        <>
            <h1 className="middle">Contact me</h1>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col" style={{ padding: "5px" }}>
                        <div className="card border-dark" >

                            <ContactType
                                link="https://api.whatsapp.com/send?phone=351920438006/"
                                img="https://img.icons8.com/color/48/000000/whatsapp.png"
                                alt="whatsapp"
                                title="Contact me via Whatsapp (or just call me)"
                                text="(+351) 920 438 006">
                            </ContactType>

                            <ContactType
                                link="mailto:costa86@zoho.com/"
                                img="https://img.icons8.com/color/48/000000/email.png"
                                alt="email"
                                title="Send me an email"
                                text="costa86@zoho.com">
                            </ContactType>

                            <ContactType
                                link="https://github.com/costa86"
                                img="https://img.icons8.com/material-outlined/48/000000/github.png"
                                alt="github"
                                title="Check out my GitHub repository"
                                text="github.com/costa86">
                            </ContactType>

                            <ContactType
                                link="https://www.linkedin.com/in/costa86/"
                                img="https://img.icons8.com/color/48/000000/linkedin.png"
                                alt="linkedin"
                                title="Connect with me on Linkedin"
                                text="linkedin.com/in/costa86">
                            </ContactType>

                            <ContactType
                                link="skype:lourenzo86@outlook.com?chat"
                                img="https://img.icons8.com/color/48/000000/skype.png"
                                alt="skype"
                                title="Skype"
                                text="Lourenzo86@outlook.com">
                            </ContactType>

                        </div>
                    </div>
                    <div className="col-sm-4"></div>

                </div>

            </div>
            <br></br>
        </>
    );
}