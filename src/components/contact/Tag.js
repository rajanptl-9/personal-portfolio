import React, { useState } from 'react'

function Tag(props) {
    const netClr = "#233b5a";
    const { link, icon, name, bgcolor } = props
    const [isHovered, setIsHovered] = useState(false)

    const stl = {
        tag_container: {
            width: "100%",
            maxWidth: "320px",
            minHeight: "68px",
            borderRadius: "16px",
            margin: "0",
            textDecoration: "none",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            color: "white",
            background: isHovered ? `linear-gradient(135deg, ${bgcolor} 0%, ${netClr} 100%)` : `linear-gradient(135deg, ${netClr} 0%, #3b5f84 100%)`,
            boxShadow: isHovered ? "0 12px 24px rgba(35, 59, 90, 0.22)" : "0 8px 16px rgba(35, 59, 90, 0.14)",
            transform: isHovered ? "translateY(-2px)" : "translateY(0)",
            transition: "all 0.25s ease",
            overflow: "hidden"
        },
        tag_icon: {
            width: "24%",
            borderRadius: "16px 0 0 16px",
            textAlign: "center",
            height: "68px",
            fontSize: "36px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: bgcolor,
        },
        tag_name: {
            width: "76%",
            height: "68px",
            fontSize: "18px",
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            display: "flex",
            justifyContent: "left",
            paddingLeft: "14px",
            alignItems: "center",
            letterSpacing: "0.01em"
        }
    }

    return (
        <a
            href={link}
            target='_blank'
            rel="noreferrer noopener"
            style={stl.tag_container}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={stl.tag_icon}>{icon}</div>
            <div style={stl.tag_name}>{name}</div>
        </a>
    )
}

export default Tag