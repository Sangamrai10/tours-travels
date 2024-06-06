import React from 'react'
import Europe from './Europe'

export default function ChooseTheDestination() {
    return (
        <>
            <div className="ChooseTheDestination">
                <div className="container">
                    <div className="padding">
                        <div className='brdr'>
                            <h4>
                                <span>Choose The</span> <span className='span1'>Destination</span>
                                <br />
                                <span className='span1'>Just Right</span> <span>For Your <br /> Vacation</span>
                            </h4>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem mollitia nihil officia error , <br />eligendi molestiae itaque illo ut dolores. Tenetur necessitatibus a rerum. Vitae harum quae officiis corporis natus repellat.</p>
                        </div>
                    </div>
                </div>
                <Europe />
            </div>
        </>
    )
}
