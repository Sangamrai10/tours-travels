import React from 'react'
import SpecialDealsSlider from './SpecialDealsSlider'

export default function SpecialDeals() {
    return (
        <>
            <div className="ChooseTheDestination">
                <div className="container">
                    <div className="padding">
                        <div className='brdr'>
                            <h4>
                                <span>Special</span> <span className='span1'>Deals And</span>
                                <br />
                                <span className='span1'>Last Minute</span> <span>Amazing <br /> Offers</span>
                            </h4>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia nihil officia error , <br />eligendi molestiae itaque illo ut dolores. Tenetur necessitatibus a rerum. Vitae harum quae officiis corporis natus repellat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <SpecialDealsSlider/>
        </>
    )
}
