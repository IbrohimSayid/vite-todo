import React from 'react';
import './Header.css'

function Header() {

    function Login() {
        console.log("Log in");
    }

    let show = false;

    console.log(show);

    return (
        <header>
            <div className='container header-container'>
                <a href='#' className='Logo'>Logo</a>
                <nav>
                    <ul className='list'>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>
                </nav>
                {show ? (
                    <button onClick={(Login) => { show = !show; }} className="btn">
                        Login
                    </button>
                ) : (
                    <button onClick={(Login) => { show = !show; }} className='btn'>
                        Sign Up
                    </button>)}
            </div>
        </header >
    )
}

export default Header;