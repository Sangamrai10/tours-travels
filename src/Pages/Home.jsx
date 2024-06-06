import React from 'react'
import Homebanner from '../img/homebanner.jpg'
import CorfuGreece from './CorfuGreece'
import ChooseTheDestination from './ChooseTheDestination'
import SpecialDeals from './SpecialDeals'
import VideoButton from './VideoButton'
import TrendingBestSelling from './TrendingBestSelling'
import Slider2 from './Slider2'
import SideSlider from './SideSlider'
import GetLatestNews from './GetLatestNews'
import AboutUsContact from './AboutUsContact'
import Gallery from './Gallery'

export default function Home() {
  return (
    <>
      <div className='home'>

        {/* slider  */}
        <div className="slider">
          <div>
            <img className='w-100' src={Homebanner} alt="" />
            <div className='banner-txt'>
              <h4><span className='span1'>Thailand</span>  <span>Last Minute</span> </h4>
              <p>30% off in August</p>
              <a href="#">Subscribe <i class="fa-solid fa-chevron-right arr px-2"></i></a>
            </div>
          </div>
        </div>

        {/* find now */}
        <div className='findNow'>
          <div className="container">
            <div className="flex">
              <div>
                <input type="text" id='whereTo' placeholder='Where to?' />
              </div>

              {/* months */}
              <div className='months'>
                <select name="" id="mnth">
                  <option value="">Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>

              {/* Travel types */}
              <div className='travelTypes'>
                <select name="" id="travelTypes">
                  <option value="">Travel Type</option>
                  <option value="1">Beaches</option>
                  <option value="2">Best Deals</option>
                  <option value="3">Group Tours</option>
                  <option value="4">Ski Trips</option>
                  <option value="5">Summer Deals</option>
                </select>
              </div>

              {/* findNow-btn */}
              <div className='findNow-btn'>
                <a href="">Find Now</a>
              </div>
            </div>
          </div>
        </div>

        {/* GO section */}
        <div className='goSec'>
          <div className="container">
            <div className='row'>

              {/* column one */}
              <div className="col-lg-6">
                <div className='brdr'>
                  <div className='px-4 pb-4'>
                    <span className=''>Amazing</span> <h4>Tours And Fun
                      Adventure</h4> <span>Waiting For You</span>

                  </div>
                </div>
                <div className='ps-4 pt-4'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci totam facilis sequi libero, repellat et expedita asperiores autem, animi tenetur dolorem suscipit, cupiditate quisquam numquam unde! Quasi necessitatibus omnis reprehenderit.
                  </p>
                </div>
              </div>

              {/* column two  */}
              <div className="col-lg-6">
                <div className='go'>
                  <p>GO!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <CorfuGreece />

      {/* ChooseTheDestination */}
      <ChooseTheDestination />

      {/* SpecialDeals */}
      <SpecialDeals />

      {/* video Banner */}
      <VideoButton />

      {/* TrendingBestSelling */}
      <TrendingBestSelling />

      {/* slider 2  */}
      <Slider2 />

      {/* SideSlider */}
      <SideSlider />

      {/* GetLatestNews  */}
      <GetLatestNews />

      {/* contact section  */}
      <AboutUsContact />

      {/* Gallery  */}
      <Gallery />

      {/* scrollTopp  */}
      <div className='scrollTopp'>
        <a className='text-decoration-none text-dark' href="">
        <i class="fa-solid fa-chevron-up"></i>
        </a>
      </div>
    </>
  )
}
