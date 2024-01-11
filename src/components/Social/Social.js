import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiBento } from "react-icons/si";

import "./Social.css";

const Social = () => {
  return (
    <div class="social-menu" id="social-menu-icons">
    <ul>
        <li><a href="https://www.linkedin.com/in/srushti-haryan/" target="_blank"><FaLinkedinIn /></a></li>
        <li><a href="https://twitter.com/HaryanSrushti/" target="_blank"><FaXTwitter /></a></li>
        <li><a href="https://github.com/SrushtiHaryan" target="_blank"><FiGithub /></a></li>
        <li><a href="https://bento.me/srushti/" target="_blank"><SiBento /></a></li>
    </ul>
</div>
  )
}

export default Social