import React from 'react'
import videobtn2 from '../img/videobtn2.jpg'
export default function VideoButtonn() {
    return (
        <>
            <div className="videoBanner">
                <a href="">
                    <div className='vidBtn'>
                        <img className='w-100' src={videobtn2} alt="" />
                        <div className="btn">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </div>
                </a>
                <div className='newsletter'>
                    <div className='container'>
                        <div className='innerNewsLetter'>
                            <p><span>Subscribe To</span> The <br /> Newsletter</p>
                            <input type="text" placeholder='Your Email...' />
                        </div>
                        <a href="">Subscribe</a>
                    </div>
                </div>
            </div>
        </>
    )
}