import React from "react";

let Panel = function(props) {
    return (
        <div style={{ 
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            marginBottom: '10px',
            width: '200px',
            height: '100px',
            justifyContent: 'center',
            
        }}>
            <div style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                    marginBottom: '10px',
                }}>
                {props.panelheading}
            </div>
            <div style={{ 
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
            }}>
                {props.panelcontent}
            </div>
        </div>
    );
}

export default Panel;