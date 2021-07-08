import React from "react";
import BackHomeBtn from "./layout/BackHomeBtn";
import Navbar from "./layout/Navbar";

const About = () => {
    return (
        <div>
            <BackHomeBtn />
            <div className="my-2 ">
                <h1>Pokedox 08/2021</h1>
                <a
                    href="https://github.com/tunahangediz"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="nes-icon github is-large"></i>
                </a>
                <a
                    className="mx-2"
                    href="https://www.instagram.com/tunahangediz/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="nes-icon instagram is-large"></i>
                </a>
            </div>
        </div>
    );
};

export default About;
