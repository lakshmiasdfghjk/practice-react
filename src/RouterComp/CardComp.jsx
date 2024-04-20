import React from "react";

let Card = function (props) {
    return (
        <div style={{ 
            borderBottom: '1px solid #ccc',
            paddingBottom: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc', 
            borderRadius: '5px',
            padding: '10px', 
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            width: '200px',
            height: '100px',
            justifyContent: 'center',
            
            }}>
            <div style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                    marginBottom: '10px', 
                    }}>
                {props.title}
            </div>
            <div style={{ 
                borderBottom: '1px solid #ccc',
                paddingBottom: '10px',
                marginBottom: '10px',
                }}>
                <div  style={{ color: 'grey', marginBottom: '10px' }}>Image</div>
            </div>
            <div style={{ 
                color: 'black',
                }}>
                {props.description}
            </div>
        </div>
    );
}

export default Card;