import React from 'react'
import data from '../Data'

export default function Slider2() {
    let pdata = data.filter((a) => a.category == "SpecialDealsSlider")
    return (
        <>
            <div className='slider2'>
                <div class="owl-carousel muji owl-theme">
                    {pdata.map((b) => (
                        <div class="item">
                            <div className='cntent ps-4'>
                                <div className='img'>
                                    <img src={b.image} alt="" /> {/*image */}
                                </div>

                                <div className='pt-4'> {/*Slider text-content */}
                                    <div className='txt'>
                                        <div className='d-flex justify-content-between'>
                                            <h4>{b.title}</h4>
                                            <h6>${b.price}</h6>
                                        </div>
                                        <p className='h6'>8.3 Superb</p>
                                        <p>{b.description}</p>
                                    </div>
                                    <div className='dt'>
                                        <div className='p-4'>
                                            <div className="d-flex justify-content-between">
                                                <p><i class="bi bi-clock"></i> 5 Days</p>
                                                <p className='ms-4'><i class="bi bi-person"></i> 18+</p>
                                                <p><i class="bi bi-geo-alt"></i> Europe</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}
