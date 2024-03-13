import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import profile from './../assets/profile.jpg';
import resume from './../assets/Resume.pdf';

const Home = () => {

    const downloadPDF = () => {
        const pdfUrl = resume;
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'sunny_resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="home-content">
            {/* <h1>Welcome to My Portfolio</h1>
            <p>This is where you can showcase your skills, projects, and achievements.</p> */}
            <div className="background-image"></div> {/* Image container */}
            <div className='brief'>
                <h1>Hello, It's Me</h1>
                <h1>Sunny Rajpurohit</h1>
                <h2>I'm a Java Developer</h2>
                <p>Want to know more about me ?</p>{/* Click here 👇🏼 */}
                <div className='buttons'>
                <Link to="/about">
                    <button className='btn-about'>About</button>
                </Link>
                    <button className='btn-cv' onClick={downloadPDF}>Download CV</button>
                </div>
            </div>
            <div className="circular-image-container">
                <img src={profile} alt="Circular Image" className="circular-image" />
            </div>
        </div>
    );
}

export default Home;