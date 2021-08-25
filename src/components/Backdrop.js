import React from "react";
import Char from "./Char";
import About from "./About";
import './CSS/backdrop.css'

const Backdrop = () => {

    return (
        <div>
            <div className='context'>
                <Char />
                <About />
            </div>
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
            </div>
        </div>
    )
}


export default Backdrop;
