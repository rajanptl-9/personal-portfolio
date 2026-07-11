import React from 'react'

function Skill(props) {
    const netClr = "#233b5a";
    const { icon, name } = props;

    return (
        <div style={{
            width: "fit-content",
            height: "fit-content",
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            color: "white",
            background: `linear-gradient(135deg, ${netClr} 0%, #385f8c 100%)`,
            fontSize: "17px",
            fontFamily: "'Nunito', sans-serif",
            borderRadius: "999px",
            margin: "5px",
            gap: "6px",
            boxShadow: "0 8px 16px rgba(35, 59, 90, 0.16)"
        }}>
            <div className='skill-icon'>{icon}</div>
            <div>{name}</div>
        </div>
    )
}

export default Skill