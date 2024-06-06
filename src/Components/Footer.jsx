import React from 'react'
import data from '../Data'

export default function Footer() {
  let pdata = data.filter((a) => a.category == "SpecialDealsSlider")
  return (
    <>
      <footer>
        <div className="container">
          <div className="flex">
            {/* About  */}
            <div className="about">
              <h4>About Us</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, laboriosam? Totam, quis! Modi quae soluta vitae, reiciendis incidunt laboriosam perspiciatis quidem ducimus blanditiis repellat tempora distinctio facere ipsam maxime pariatur!</p>
              <div className='contact'>
                <div>
                  <a href=""><i class="fa-solid fa-phone me-2"></i> 1-234-567-89012</a>
                </div>
                <div>
                  <a href=""><i class="fa-solid fa-location-dot me-2"></i> 123 Main Colins Street</a>
                </div>
                <div>
                  <a href=""><i class="fa-solid fa-envelope me-2"></i> getaway@example.com</a>
                </div>
              </div>
            </div>

            {/* Latest Posts  */}
            <div className="latestPosts">
              <h4>Latest Postss</h4>
              <div className='posts'>
                <div className='aug'>
                  <a href="">August 30, 2017</a>
                </div>
                <div>
                  <p>
                    <a href="">How To Take Better Photos?</a>
                  </p>
                </div>
                <div className='aug'>
                  <a href="">August 30, 2017</a>
                </div>
                <div>
                  <p>
                    <a href="">How To Take Better Photos?</a>
                  </p>
                </div>
                <div className='aug'>
                  <a href="">August 30, 2017</a>
                </div>
                <div>
                  <p>
                    <a href="">How To Take Better Photos?</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Latest Tweets  */}
            <div className="latestTweets">
              <h4>Latest Tweets</h4>
              <div className="d-flex">
                <i class="fa-brands fa-twitter pt-1"></i>
                <div className='tweets ps-2'>
                  <a href=""> @alexherder</a> hi <a href=""> @alexherder</a>, we can’t recommend anyone specific, but you can find a list of freelenacers working wit… <a href=""> https://t.co/fs1gMcMOej</a>
                </div>
              </div>
              <div className="d-flex">
                <i class="fa-brands fa-twitter pt-1"></i>
                <div className='tweets ps-2'>
                  <a href=""> @simonrichwright</a> Here’s an article to get you started with using our support platform:<a href="">https://t.co/eiUoQNlHUh</a> Let… <a href=""> https://t.co/PhSMKT4Rph</a>
                </div>
              </div>
            </div>

            {/* Instagram  */}
            <div className="instagram">
              <h4>Instagram</h4>
              <div className='ins'>
                {pdata.slice(0, 3).map((b) => (
                  <a href="">
                    <img className='img' src={b.image} alt="" />
                  </a>
                ))}
              </div>
              <div className='ins'>
                {pdata.slice(3, 6).map((b) => (
                  <a href="">
                    <img className='img' src={b.image} alt="" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer >
    </>
  )
}
