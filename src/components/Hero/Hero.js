import React from 'react'
import './Hero.css';
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

const Hero = () => {
    return (
        <div className="hero-container">

            {/* image */}
            <img src="\assets\profile-pic.png" className='hero-image rounded-full mt-14'></img>
            {/* name */}
            <div className="hero-greeting ">Hi, I'm Srushti <span className="wave-emoji">👋</span></div>
            <div className="hero-role">Full-stack Developer</div>
            {/* desc */}
            <div className="hero-desc">I'm Srushti Haryan, a full-stack developer driven by the desire to grow professionally and contribute to impactful projects. Explore my portfolio showcasing my dedication to web development. Let's collaborate to create innovative solutions and shape the future together.</div>

            <div class="hero-buttons">
                <a href="https://drive.google.com/file/d/1xaSWLW_aINh32A_H1dm5rGxRyq6wa6Wf/view?usp=drive_link" target="_blank">
                    <div class="hero-resume-button">
                        <MdOutlineEmail />
                        <div class="hero-resume-text">Resume/CV</div>
                    </div>
                </a>
                <a href="https://github.com/SrushtiHaryan">
                    <div class="hero-github-button">
                        <FiGithub />
                        <div class="hero-github-text">GitHub</div>
                    </div>
                </a>
            </div>


        </div>
    )
}

export default Hero