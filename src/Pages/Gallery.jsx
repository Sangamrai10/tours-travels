import React from 'react'
import data from '../Data'
export default function Gallery() {
    const pdata=data.filter((a)=>a.category=="img-gallery")
  return (
    <>
      <div className="gallery">
        <div className="flw">
            {pdata.map((cntnt)=>(
            <a title={cntnt.title} href="">
                <img src={cntnt.image} alt="" />
            </a>
            ))}
        </div>
      </div>
    </>
  )
}
