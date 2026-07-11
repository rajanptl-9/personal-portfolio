import React from 'react';
import "./education.css";
import { HiExternalLink } from "react-icons/hi";

function Education() {
    return (
        <div className='education_container'>
            <div className='education_subcontainer'>
                <div id='education_title'>EDUCATION</div>
                <ul class="progress">
                    <li class="progress__item progress__item--completed">
                        <div className='education_text'>
                            <span href='#'  className='progress__title' rel="noopener noreferrer" style={{ textDecoration: "none", fontSize: "24px", fontWeight: "600", textAlign: "center", color: "#233b5a" }}>SMT M.R.C. High School Dihen (2018)</span>
                            <span className='progress__info' style={{ fontSize: "16px", textAlign: "center" }}>I have successfully completed my secondary education from the GSE Board at SMT MRC High School, Dihen.</span>
                        </div>
                    </li>
                    <li class="progress__item progress__item--completed">
                        <div className='education_text'>
                            <a href='https://ppsavanigseb.org/' target='_blank' rel="noopener noreferrer" className='progress_title' style={{ textDecoration: "none", fontSize: "24px", display:"flex", alignItems:"center", fontWeight: "600", textAlign: "center", color: "#233b5a" }}>P. P. Savani Chaitanya Vidhya Sankul (2020) <HiExternalLink style={{ fontSize: "22px" }} /></a>
                            <span style={{ fontSize: "16px", textAlign: "center" }}>I have successfully completed my higher secondary education from the GSE Board at P.P. Savani Chaitanya Vidhya Sankul, a group of schools.</span>
                        </div>
                    </li>
                    <li class="progress__item progress__item--completed">
                        <div className='education_text'>
                            <a href='https://www.svnit.ac.in/' target='_blank' rel="noopener noreferrer" className='progress__title' style={{ textDecoration: "none", display:"flex", alignItems:"center", fontSize: "24px", fontWeight: "600", textAlign: "center", color: "#233b5a" }}>S. V. National Institute of Technology (2020-2024) <HiExternalLink   style={{ fontSize: "22px" }} /></a>
                            <span className='progress__info' style={{ fontSize: "16px", textAlign: "center" }}>I have completed my undergraduate studies in Computer Science and Engineering at S.V. National Institute of Technology.</span>
                        </div>
                    </li>
                    <li class="progress__item progress__item--active">
                        <div className='education_text'>
                            <a href='https://www.nitgoa.ac.in/' target='_blank' rel="noopener noreferrer" className='progress__title' style={{ textDecoration: "none", display:"flex", alignItems:"center", fontSize: "24px", fontWeight: "600", textAlign: "center", color: "#233b5a" }}>National Institute of Technology Goa (2025-Present) <HiExternalLink   style={{ fontSize: "22px" }} /></a>
                            <span className='progress__info' style={{ fontSize: "16px", textAlign: "center" }}>I am currently pursuing my postgraduate studies in Computer Science and Engineering at the National Institute of Technology Goa.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Education