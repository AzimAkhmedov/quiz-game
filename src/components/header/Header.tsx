import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import "./Header.scss"

const Header = () => {

    const [active, setActive] = useState("active-first")
    useEffect(() => {
        console.log(active);
    }, [active])

    const switchElements = () => {
        if (active === "active-first") {
            setActive("active-second")
        } else {
            setActive("active-first")
        }
    }
    return (
        <div className='folder'>
            <nav>
                <div className="nav-item">
                    <div className="logo">
                        Quiz Time
                    </div>
                </div>

                <div className="nav-item">
                    <button>Start Quiz</button>
                </div>
            </nav>

            <aside>
                <NavLink
                    to={"/"}
                    onClick={() => { switchElements() }}
                    className={
                        active === "active-first" ? "active" : ""
                    }>
                    <button>Dashboard</button>
                </NavLink>
                <NavLink
                    onClick={() => { switchElements() }}
                    className={
                        active === "active-second" ? "active" : ""
                    }
                    to={"/score"}>
                    <button>Your Score</button>
                </NavLink>
            </aside>
        </div>
    )
}

export default Header