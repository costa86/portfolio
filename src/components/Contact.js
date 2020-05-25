import React from "react";
import { ContactType } from "./ContactType";

export function Contact() {

    return (
        <>
            <h1 className="centered">Contact me</h1>

            <div>
                <ContactType
                    link="https://api.whatsapp.com/send?phone=351920438006/"
                    img="https://img.icons8.com/material-outlined/50/000000/whatsapp.png"
                    alt="whatsapp"
                    title="whatsapp"
                    text="(+351) 920 438 006">
                </ContactType>

                <ContactType
                    link="mailto:costa86@zoho.com/"
                    img="https://img.icons8.com/material-outlined/50/000000/new-post.png"
                    alt="email"
                    title="email"
                    text="costa86@zoho.com">
                </ContactType>

                <ContactType
                    link="https://github.com/costa86"
                    img="https://img.icons8.com/material-outlined/50/000000/github.png"
                    alt="github"
                    title="github"
                    text="github.com/costa86">
                </ContactType>

                <ContactType
                    link="https://www.linkedin.com/in/costa86/"
                    img="https://img.icons8.com/material-outlined/50/000000/linkedin.png"
                    alt="linkedin"
                    title="linkedin"
                    text="linkedin.com/in/costa86">
                </ContactType>

                <ContactType
                    link="skype:lourenzo86@outlook.com?chat"
                    img="https://img.icons8.com/material-outlined/50/000000/skype.png"
                    alt="skype"
                    title="skype"
                    text="Lourenzo86@outlook.com">
                </ContactType>
            </div>
        </>
    );
}