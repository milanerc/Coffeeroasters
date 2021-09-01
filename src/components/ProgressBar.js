import React from 'react'

const ProgressBar = () => {
    return (
        <div className="progress mb-10 md:mb-20">
            <div className="circle border-dark_cyan"></div>                   
            <span className="bar border border-pale_orange"></span>
            <div className="circle border border-dark_cyan"></div>                    
            <span className="bar border border-pale_orange"></span>
            <div className="circle border border-dark_cyan"></div>
        </div> 
    )
}

export default ProgressBar
