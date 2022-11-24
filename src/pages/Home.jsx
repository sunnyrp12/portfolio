import React from "react";
import styled from "styled-components";

import background from "./../images/background.jpg";

function Home() {
    console.log("Came to Home");
    return (
        <Wrapper>
            <div className="hey">
                <h1>Hi There !</h1>
                <h1>Welcome to Sunny's Portfolio</h1>
            </div>
        </Wrapper>
    );

}

const Wrapper = styled.section`
background-image: url('${background}');
min-height: 500px;
position: absolute;
width: 100%;
top: 48px;

.hey{
    margin-top: 100px;
    margin-left: 50px;
    width: 40%;
    height: 250px;
    background-color: grey;
    opacity: 0.6;
    border-radius: 10px;
}

`;


export default Home;