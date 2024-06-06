import React from 'react'
import data from '../Data'
export default function SpecialDealsSlider() {
    let pdata = data.filter((a) => a.category == "SpecialDealsSlider")
    return (
        <>
        <div className='ok'>
            <div class="owl-carousel owl-theme loop">
                {pdata.map((b) => (
                    <div class="item">
                        <div className='hehe'>
                            <a href="">
                                <div className='mg'>
                                    <img src={b.image} alt="" />

                                    {/* description section  */}
                                    <div className='gm'>
                                        <div className='container'>
                                            <div className='d-flex justify-content-between'>
                                                <h4>{b.title}</h4>
                                                <h6>${b.price}</h6>
                                            </div>
                                            <p>{b.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}
