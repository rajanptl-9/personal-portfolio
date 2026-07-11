import React from 'react'
import { HiOutlineExternalLink } from "react-icons/hi";

function ProjectCard(props) {
    const { img, title, desc, link, website } = props;

    return (
        <div className='card'>
            <img
                className='project-image'
                src={img}
                alt={title}
                loading='lazy'
                decoding='async'
                width='600'
                height='360'
            />
            <div className='name'>{title}</div>
            <div className='details'>{desc}</div>
            {link && <div className='link_button'><a href={link} target='_blank' rel="noopener noreferrer" className="github-button" style={{ textDecoration: "none", color: "white" }}>Go to GitHub <HiOutlineExternalLink style={{ fontSize: "18px" }} /></a></div>}
            {website && <div className='website_button'><a href={website} target='_blank' rel="noopener noreferrer" className="github-button" style={{ textDecoration: "none", color: "white" }}>Go to Website <HiOutlineExternalLink style={{ fontSize: "18px" }} /></a></div>}
        </div>
    )
}

export default ProjectCard