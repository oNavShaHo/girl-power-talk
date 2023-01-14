import React,{useState} from 'react'
import ReactMapGl from 'react-map-gl'


function Mymap() {
    const [viewport,setViewport]=useState({
        latitude:28.6139,
        longitude:-77.2090,
        zoom:10,
        width:"100vw",
        height:"100vh",
       
    })
  return (
    <div>
        <ReactMapGl{...viewport}>
            marker here
        </ReactMapGl>
    </div>
  )
}

export default Mymap