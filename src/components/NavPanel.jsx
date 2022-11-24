import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import avatar from "./../images/hacker.png";

function NavPanel() {
    return (
        <Wrapper>
            <Link to={"/portfolio/"}>
                <div className="logo">
                    <img src={avatar} width="40" height="40"></img>
                </div>
            </Link>
            <ul>
                <Link to={"/portfolio/"}>
                    <div className="home">
                        <li>Sunny</li>
                    </div>
                </Link>
                <div className="nav-elements">
                    <Link to={"/portfolio/"}>
                        <li>Home</li>
                    </Link>
                    <Link to={"/portfolio/about"}>
                        <li>About</li>
                    </Link>
                    <Link to={"/portfolio/"}>
                        <li>Skills</li>
                    </Link>
                    <Link to={"/portfolio/"}>
                        <li>Experience</li>
                    </Link>
                    <Link to={"/portfolio/contact"}>
                        <li>Contact</li>
                    </Link>
                </div>
            </ul>
        </Wrapper>
    );
}

export default NavPanel;


const Wrapper = styled.section`
    
    background-color: grey;
    
    .logo{
        position: fixed;
        top: 8px;
        left: 80px;
        cursor: pointer;
    }
    
    .home {
        display: inline-block;
        margin-left: 40px;
        margin-right: 130px;
        height: 100%;
    }

    .nav-elements {
        display: inline-block;
        float: right;
        height: 100%;
    }

    ul{
        
        // height: 50px;
        margin-top: 0px;    
        background-color: #333;
        overflow: auto;
        white-space: nowrap;
        
    }

    li {
        display: inline-block;
        color: white;
        padding: 15px 10px 15px 10px;
        margin: 0px 30px 0px 30px;
        cursor: pointer;
        height: 100%;

        :hover{
            background-color: #111;
        }
    }
`;