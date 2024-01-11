import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import './AboutMeCard.css'

const AboutMeCard = (props) => {
    return (
        <div className="aboutme-card">

            <div className="aboutme-heading">
                <div className="aboutme-heading-logo">{props.icon}</div>
                <div className="aboutme-heading-title">{props.heading}</div>

            </div>
            <div className="aboutme-description">
                <div className="aboutme-desc-tag tag-open">h3</div>
                <div className="aboutme-desc">{props.desc}</div>

                <div className="aboutme-desc-tag tag-close">h3</div>

            </div>
        </div>
    )
}

export default AboutMeCard