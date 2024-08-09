import React from "react";
import "../Css/Header.css";
import Button from "./Button";
import {Outlet} from 'react-router-dom';
function Header():JSX.Element{

    return(
        <>
            <header>
                <div>
                <Button title="All" src="/all" />
                    <Button title="Movies" src="/movies" />
                    <Button title="Cartoon" src="/cartoon"/>
                    <Button title="Series" src="/series"/>
                </div>
            </header>
            <Outlet/>
        </>

    )
}

export default Header;