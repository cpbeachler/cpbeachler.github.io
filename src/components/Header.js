import React from "react";
import './CSS/header.css';

const Header = () => {
    return (
    <div className='header'>
        <h1>Caleb Beachler</h1>
        <div className='row2'>
            <h3>
                <a href='https://www.github.com/cpbeachler' target="_blank" rel="noreferrer">GitHub</a>
            </h3>
            <h3>
                <a href='https://www.linkedin.com/in/caleb-beachler-943198128/' target="_blank" rel="noreferrer">LinkedIn</a>
            </h3>
        </div>
    </div>
    )
}

export default Header;
