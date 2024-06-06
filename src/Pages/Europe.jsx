import React from 'react'
import tourImg1 from '../img/tourImg1.jpg'
import tourImg2 from '../img/tourImg2.jpg'
import tourImg3 from '../img/tourImg3.jpg'

export default function Europe() {
    return (
        <>
            <div className="Europe ">
                <div>

                    {/* first row */}
                    <div className='flex'>
                        <div className='a'>
                            <a href="">
                                <img src={tourImg1} alt="" />
                            </a>
                        </div>
                        <div className='b'>
                            <a href="">
                                <h4>europe</h4>
                                <span>europe</span>
                            </a>
                        </div>
                        <div className='c'>
                            <div className='exp'>
                                <div className='lh-sm ps-4 pt-4 pb-4'>
                                    <div className='d-flex justify-content-between top'>
                                        <p>
                                            Original <span>Experience</span>
                                        </p>
                                        <a href="">New</a>
                                    </div>
                                    <span className='spanP'>been there recently?</span>
                                </div>
                            </div>
                            <div className="px-4 learnMore">
                                <p>Lorem ipsum dolor sit amet, consectetur a elit. In ut xullamcorper leo, dsf eget euismod orci. Cum sociis natoquepenatibus magnis.</p>

                                <a href="">Learn More <i class="fa-solid fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* second row */}
                    <div className='flex'>
                        <div className='c'>
                            <div className='exp'>
                                <div className='lh-sm px-4 pt-4 pb-4'>
                                    <div className='d-flex justify-content-between top'>
                                        <p>
                                            Original <span>Experience</span>
                                        </p>
                                    </div>
                                    <span className='spanP'>been there recently?</span>
                                </div>
                            </div>
                            <div className="px-4 learnMore">
                                <p>Lorem ipsum dolor sit amet, consectetur a elit. In ut xullamcorper leo, dsf eget euismod orci. Cum sociis natoquepenatibus magnis.</p>

                                <a href="">Learn More <i class="fa-solid fa-chevron-right"></i></a>
                            </div>
                        </div>
                        <div className='a'>
                            <a href="">
                                <img src={tourImg2} alt="" />
                            </a>

                        </div>
                        <div className='b asia'>
                            <a href="">
                                <h4>asia</h4>
                                <span>asia</span>
                            </a>
                        </div>
                    </div>

                    {/* third row */}
                    <div className='flex'>
                        <div className='b'>
                            <a href="">
                                <h4>america</h4>
                                <span>america</span>
                            </a>
                        </div>
                        <div className='c'>
                            <div className='exp'>
                                <div className='lh-sm ps-4 pt-4 pb-4'>
                                    <div className='d-flex justify-content-between top'>
                                        <p>
                                            Original <span>Experience</span>
                                        </p>
                                        <a href="">New</a>
                                    </div>
                                    <span className='spanP'>been there recently?</span>
                                </div>
                            </div>
                            <div className="px-4 learnMore">
                                <p>Lorem ipsum dolor sit amet, consectetur a elit. In ut xullamcorper leo, dsf eget euismod orci. Cum sociis natoquepenatibus magnis.</p>

                                <a href="">Learn More <i class="fa-solid fa-chevron-right"></i></a>
                            </div>
                        </div>
                        <div className='a'>
                            <a href="">
                                <img src={tourImg3} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
