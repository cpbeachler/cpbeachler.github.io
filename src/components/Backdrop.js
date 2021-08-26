import React from "react";
import Char from "./Char";
import About from "./About";
import Skills from "./Skills"
import Sites from "./Sites"
import Header from "./Header";
import './CSS/backdrop.css'

const Backdrop = () => {

    return (
        <>
            <div className='area'>
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
                <Header />
                <div className='context'>
                    <About />
                </div>
                <div className='second'>
                    <Skills />
                    <Sites />
                </div>
                <div className='third'>
                    <Char />
                </div>
            </div>
        </>
    )
}


export default Backdrop;
