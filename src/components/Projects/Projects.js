import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa";
import { EffectCards, Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import './Projects.css';

// import required modules

export default function Projects() {

    const slideRef1 = useRef(null);
    const slideRef2 = useRef(null);

    const handleHover = (slideRef) => {
        slideRef.current.classList.add('hover-scroll');
    };

    const handleLeave = (slideRef) => {
        slideRef.current.classList.remove('hover-scroll');
    };

    return (
        <>
            <div className="project-container">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Pagination,]}
                    className="mySwiper"
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="slide-content">
                            <div className="slide-left">
                                <h2>ExpressAbled</h2>
                                <p>Developed a web application catering to individuals with auditory and visual impairments. This platform incorporates advanced functionalities such as gesture recognition and speech-to-text conversion. By integrating the Web-Speech API for converting spoken language to text and utilizing the MobileNet model for ASL-to-Text feature, the application ensures a more inclusive and accessible experience for users with diverse needs.</p>
                                <div>Tech Stack: HTML, CSS, JS, Tensorflow.js</div>
                                <div class="hero-buttons">
                                    <div class="hero-resume-button">
                                        <FaLink />
                                        <div class="hero-resume-text">Demo Link</div>
                                    </div>
                                    <div class="hero-github-button">
                                        <FiGithub />
                                        <div class="hero-github-text">GitHub</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='slide-right'
                                ref={slideRef1}
                                onMouseEnter={() => handleHover(slideRef1)}
                                onMouseLeave={() => handleLeave(slideRef1)}
                            >
                                <img src="\assets\ExpressAbled.png" alt="Project 1" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-content">
                            <div className="slide-left">
                                <h2>FairHire</h2>
                                <p>Developed an Automated Candidate Screening System. The system efficiently classifies resumes, parses information, and ranks candidates. The implementation include email notifications for shortlisted candidates through Nodemailer. GPT-2 from HuggingFace utilized to generate interview questions based on skills. The aim was to enhance hiring workflows by leveraging NLP & LLM technologies to streamline the recruitment system.</p>
                                <div>Tech Stack: Reactjs, Nodejs, Flask, Docker</div>
                                <div class="hero-buttons">
                                    <div class="hero-resume-button">
                                        <FaLink />
                                        <div class="hero-resume-text">Demo Link</div>
                                    </div>
                                    <div class="project-github-button">
                                        <FiGithub />
                                        <div class="hero-github-text">GitHub</div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='slide-right'
                                ref={slideRef2}
                                onMouseEnter={() => handleHover(slideRef2)}
                                onMouseLeave={() => handleLeave(slideRef2)}
                            >
                                <img src="\assets\FairHire.png" alt="Project 2" />
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>

                
            </div>

        </>
    );
}
