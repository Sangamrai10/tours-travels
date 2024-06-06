import React from 'react'
import tourImg1 from '../img/tourImg1.jpg'
import tourImg2 from '../img/tourImg2.jpg'
import tourImg3 from '../img/tourImg3.jpg'
import tourImg4 from '../img/tourImg4.jpg'
import tourImg5 from '../img/tourImg5.jpg'
import tourImg6 from '../img/tourImg6.jpg'
import tourImg7 from '../img/tourImg7.jpg'
import tourImg8 from '../img/tourImg8.jpg'
import tourImg9 from '../img/tourImg9.jpg'
import tourImg10 from '../img/tourImg10.jpg'

export default function CorfuGreece() {
  return (
    <>
      <div className='corfuGreece'>
        <div className="container-fluid">
          <div className="row">
            {/* first column */}
            <div className="col-md-2">
              <div className='div'> {/*Beijing */}
                <a href="">
                  <img className='w-100' src={tourImg1} alt="" /> {/* first image  */}
                  <div className='txt ps-3'>
                    <h4>Beijing</h4>
                    <p>$650</p>
                  </div>
                </a>
              </div>

              <div className='secnd div mt-2'> {/*New York, both classes are external except "mt-2"*/}
                <a href="">
                  <img className='w-100' src={tourImg6} alt="" /> {/* second image  */}
                  <div className='txt ps-3'>
                    <h4>New York</h4>
                    <p>$950</p>
                  </div>
                </a>
              </div>
            </div>

            {/* second column  */}
            <div className="col-md-8">
              <div className="row">

                <div className=" col-md-6 px-0 pe-2 pb-2"> {/* second column's first row */}
                  <div className='div'>
                    <a href="">
                      <img className='w-100' src={tourImg2} alt="" /> {/*Maldives */}
                      <div className='txt ps-3'>
                        <h4>Maldives</h4>
                        <p>$1350</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-md-6 px-0"> {/*second columns second row */}
                  <div className="row">   {/* another row */}
                    <div className="col-lg-6">  {/*Column one */}
                      <div className='div'>
                        <a href="">
                          <img className='w-100' src={tourImg3} alt="" /> {/*Prague */}
                          <div className='txt ps-3'>
                            <h4>Prague</h4>
                            <p>$600</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">   {/*Column two */}
                      <div className='div'>
                        <a href="">
                          <img className='w-100' src={tourImg4} alt="" /> {/*Perast */}
                          <div className='txt ps-3'>
                            <h4>Perast</h4>
                            <p>$350</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <a className='text-decoration-none' href="">  {/*Text divison */}
                    <div className='corfu w-100 my-3 pb-4'>  {/*"corfu" external class */}
                      <div className='hdr'>
                        <h4 className='text-black fs-2'>
                          <span className='fw-bold fs-2'>Corfu,</span> Greece
                        </h4>
                        <span className='price'>$320</span>
                      </div>
                      <div className='desc'>
                        <p className='mb-0'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor aenean massa. </p>
                      </div>
                      <a href="">learn more <i class="bi bi-chevron-right"></i></a>
                    </div>
                  </a>
                </div>

                <div className="row">{/*Second row */}
                  <div className="col-md-3 px-0">
                    <div className='div me-2'>{/*Argentian */}
                      <a href="">
                        <img className='w-100' src={tourImg7} alt="" />
                        <div className='txt ps-3'>
                          <h4>Argentina</h4>
                          <p>$1250</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 px-0 midImg"> {/*Slovenia, "midImg" external style */}
                    <div className="div me-2">
                      <a href="">
                        <img className='w-100' src={tourImg8} alt="" />
                        <div className='txt ps-3'>
                          <h4>Slovenia</h4>
                          <p>$1250</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-3 px-0 midImg"> {/*Madrid */}
                    <div className="div">
                      <a href="">
                        <img className='w-100' src={tourImg9} alt="" />
                        <div className='txt ps-3'>
                          <h4>Madrid</h4>
                          <p>$1250</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third column  */}
            <div className="col-md-2"> 
              <div className='div'> {/*Mykonos */}
                <a href="">
                  <img className='w-100' src={tourImg5} alt="" /> {/* first image  */}
                  <div className='txt ps-3'>
                    <h4>Mykonos</h4>
                    <p>$1259</p>
                  </div>
                </a>
              </div>

              <div className='secnd div mt-2'> {/*Malasiya, both classes are external except "mt-2"*/}
                <a href="">
                  <img className='w-100' src={tourImg10} alt="" /> {/* second image  */}
                  <div className='txt ps-3'>
                    <h4>Malasiya</h4>
                    <p>$640</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
