import React from 'react'
import "./skills.css"
import Skill from './Skill';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux, SiMongodb, SiOracle, SiMicrosoftazure, SiPostman } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { GrMysql } from "react-icons/gr";
import { FaGolang } from "react-icons/fa6";

function Skills() {
  return (
    <div className='skill_container'>
        <div id='skills_title'>SKILLS</div>
        <div id='skills_subtitle'>Technical Skills</div>
        <div className='skills'>
            <Skill icon={<FaJava className='skill'/>} name="Java" />
            <Skill icon={<FaPython className='skill'/>} name="Python" />
            <Skill icon={<TbBrandCpp className='skill'/>} name="C/C++" />
            <Skill icon={<FaGolang className='skill'/>} name="Golang" />
            <Skill icon={<FaHtml5 className='skill'/>} name="HTML" />
            <Skill icon={<FaCss3Alt className='skill'/>} name="CSS" />
            <Skill icon={<IoLogoJavascript className='skill'/>} name="JavaScript" />
            <Skill icon={<FaReact className='skill'/>} name="ReactJS" />
            <Skill icon={<FaBootstrap className='skill'/>} name="BootStrap" />
            <Skill icon={<SiRedux className='skill'/>} name="Redux" />
            <Skill icon={<FaNodeJs className='skill'/>} name="NodeJS" />
            <Skill icon={<SiPostman className='skill'/>} name="Postman" />
            <Skill icon={<FaGit className='skill'/>} name="Git" />
            <Skill icon={<FaGithub className='skill'/>} name="Git Hub" />
            <Skill icon={<PiFileSql className='skill'/>} name="SQL" />
            <Skill icon={<SiMongodb className='skill'/>} name="MongoDB" />
            <Skill icon={<SiOracle className='skill'/>} name="OracleDB" />
            <Skill icon={<SiMicrosoftazure className='skill'/>} name="Microsoft Azure" />
            <Skill icon={<GrMysql className='skill'/>} name="MySQL" />
        </div>
    </div>
  )
}

export default Skills