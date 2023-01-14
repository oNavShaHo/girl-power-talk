import React from 'react'
import '../components/box1.css'
function box1({heading,content,position,image,button,posi}) {
  return (
    <div class="container">
      <img src={image} height="300px" padding="10px" style={{float: position === 'right' ? 'right' : 'left'}} />
       <h2>{heading}</h2>
       <br/>
       
       <p>{content}</p>
      
      <button style={{float: posi === 'right' ? 'right' : 'left'}} class="my-button">{button}</button>


    </div>
  )
}

export default box1