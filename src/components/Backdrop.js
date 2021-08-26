import React from "react";
import Char from "./Char";
import About from "./About";
import Skills from "./Skills"
import './CSS/backdrop.css'

const Backdrop = () => {

    return (
        <>
            <div className='area'>
                <div className='context'>
                    <About />
                </div>
                <div className='second'>
                    <Skills />
                    <Char />
                </div>
                <ul className='circles'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </>
    )
}


export default Backdrop;
