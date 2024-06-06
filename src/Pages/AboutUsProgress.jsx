import React from 'react'

export default function AboutUsProgress() {
    return (
        <>
            <div className="AboutUsProgress">
                <div className="container">
                    <div className="proflex">
                        <div className='w-100 contactUs'>
                            <h6><span>Contact Us</span> Or Visit Us</h6>
                            <p className='p'>Been Recently Here?</p>
                            <p className='p1'>
                                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem maecenas nec.
                            </p>
                        </div>

                        {/* Progress Bar sections  */}
                        <div className='w-100  prgss '>

                            {/* Accomodation Bar */}
                            <div >
                                <div className='d-flex justify-content-between'>
                                    <h6 className='mb-0'>Accomodation</h6>
                                    <p className='mb-0'>68%</p>
                                </div >
                                <progress id='accomodation' value={68} max={100} className='w-100 mt-0 pt-0'></progress>
                            </div>

                            {/* Destination Bar  */}
                            <div >
                                <div className='d-flex justify-content-between'>
                                    <h6 className='mb-0'>Destination</h6>
                                    <p className='mb-0'>95%</p>
                                </div >
                                <progress id='accomodation' value={95} max={100} className='w-100 mt-0 pt-0'></progress>
                            </div>

                            {/* Meals Bar  */}
                            <div >
                                <div className='d-flex justify-content-between'>
                                    <h6 className='mb-0'>Meals</h6>
                                    <p className='mb-0'>54%</p>
                                </div >
                                <progress id='accomodation' value={54} max={100} className='w-100 mt-0 pt-0'></progress>
                            </div>

                            {/* Transport Bar  */}
                            <div >
                                <div className='d-flex justify-content-between'>
                                    <h6 className='mb-0'>Transport</h6>
                                    <p className='mb-0'>92%</p>
                                </div >
                                <progress id='accomodation' value={92} max={100} className='w-100 mt-0 pt-0'></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
