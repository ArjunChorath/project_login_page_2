import React from 'react'

export const Pagination = () => {
    const containerStyle = {
      padding: "20px",
    };
     const blackBlockStyle = {
    width: "100%",
    height: "30vh", // 30% of the viewport height
    backgroundColor: "black",
  };

  const selectionBoxStyle = {
    width: "calc(100% - 40px)", // 100% width minus 20px for left padding
    padding: "26px",
    backgroundColor: "blue",
    border: "2px solid blue",
    color: "white",
  };
  return (
    <div> <div style={containerStyle}>
      <div style={blackBlockStyle}></div>
      <div style={selectionBoxStyle}>
        
      </div>
    </div></div>
  )
}



 

  