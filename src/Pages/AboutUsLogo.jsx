import React from 'react'
import data from '../Data'
import clients from '../img/clients.png'
export default function AboutUsLogo() {
    let pdata = data.filter((a) => a.category == "logo")
    return (
        <>
            <div className="AboutUsLogo">
                <div className="container">
                    <div className="d-flex">
                        <div className='clients'>
                            <div className="owl-carousel owl-theme">
                                {pdata.map((b) => (
                                    <div className="item">
                                        <a href=""><img src={b.image} alt="" /></a>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
