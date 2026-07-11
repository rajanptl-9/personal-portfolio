import React from 'react'
import "./about.css"
import Skills from './Skills';
import Education from './Education';
import { GrDocumentDownload } from "react-icons/gr";

function About() {
    return (
            <div className='about_subcontainer'>
                <div className='about_me'>
                    {/* <div className='image_div'></div> */}
                    <div className='about_content'>
                        <div id='about_me_title'>ABOUT ME</div>
                        <div id='about_text'>Hello, esteemed visitor. I am currently pursuing a postgraduate degree at the National Institute of Technology Goa, with graduation anticipated in July 2027, while serving as a System Software Engineering Graduate Intern at Intel Technology India Pvt. Ltd. Previously, I completed a Bachelor of Technology in Computer Science and Engineering at Sardar Vallabhbhai National Institute of Technology, Surat, and gained practical experience as a Graduate Engineering Trainee Intern at John Deere in Pune, Maharashtra, graduating in June 2024.</div>
                        <span>
                            <a href="https://drive.google.com/file/d/1RI94c4o5rGJUnSEfznONCJN9wZTs35V1/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                <div id='button'>Download CV <GrDocumentDownload style={{ paddingLeft: "6px", fontSize:"26px" }} /></div>
                            </a>
                        </span>
                    </div>
                </div>
                <Skills />
                <Education />
            </div>
    )
}

export default About