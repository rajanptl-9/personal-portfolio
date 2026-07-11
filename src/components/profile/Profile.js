import './profile.css';
import React from 'react'
import DynamicText from './DynamicText'
import { GrDocumentDownload } from "react-icons/gr";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Profile() {
    return (
        <div id="profile">
            <div className="subcontainer">
                <div id="introduction">
                    <div id="subheadfont">Hello, I'm </div>
                    <div id="headfont"> Rajan Patel.</div>
                    <DynamicText />
                    <div id="description">Currently pursuing my Master's in Computer Science at National Institute of Technology, Goa, along with an internship at Intel Technology India Pvt. Ltd.</div>
                    <a href="https://drive.google.com/file/d/1RI94c4o5rGJUnSEfznONCJN9wZTs35V1/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                        <div id="downloadcv">Download CV <GrDocumentDownload style={{ paddingLeft: "6px", fontSize:"26px" }} /></div>
                    </a>
                    <div className="socialmedia">
                        <div>
                            <a href="https://www.linkedin.com/in/rajan-patel-aaa503252/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{ fontSize: '44px', color: '#0a66c2' }} /></a>
                        </div>
                        <div>
                            <a href="https://github.com/rajanptl-9" target="_blank" rel="noopener noreferrer"><FaSquareGithub style={{ fontSize: '44px', color: '#010409' }} /></a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=100056040500100" target="_blank" rel="noopener noreferrer"><FaFacebookSquare style={{ fontSize: '44px', color: '#1877f2' }} /></a>
                        </div>
                    </div>
                </div>
                <div className="profileimage"></div>
            </div>
        </div>
    )
}

export default Profile;