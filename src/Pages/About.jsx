import React from 'react'
import AboutUsProgress from './AboutUsProgress'
import AboutUsContact from './AboutUsContact'
import VideoButtonn from './VideoButtonn'
import AboutUsLogo from './AboutUsLogo'
export default function About() {
  return (
    <>
      <div className="aboutUs">
        <div className="top">
          <div className='imgf'>
            <div className='flex'>
              <div>
                <h4>about us</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AboutUsProgress  */}
      <AboutUsProgress />

      {/* AboutUsContact  */}
      <AboutUsContact/>

      {/* Video Button section  */}
      <VideoButtonn/>

      {/* Clients section  */}
      <AboutUsLogo/>
    </>
  )
}
