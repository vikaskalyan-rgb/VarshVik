import React from 'react'

function Header () {
  

  const scrollToLocation = (e) => {
    e.preventDefault();
    const locationSection = document.getElementById('whenwhere');
    if (locationSection) {
      locationSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header
      id='home'
      className='header valign bg-img parallaxie'
    >
      <div className='hero-overlay'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center caption'>
            <div className='hero-content'>
              
              {/* Main couple names */}
              <h1 className='animate-box hero-names' data-animate-effect='fadeInUp'>
                Varsha & Vikas
              </h1>

              {/* Elegant divider */}
              <div className='hero-divider'>
                <span className='divider-line-left'></span>
                 <span className='divider-icon'>♥</span>
                <span className='divider-line-right'></span>
              </div>
            

              {/* Subtitle */}
              <p className='hero-subtitle animate-box' data-animate-effect='fadeInUp'>
                Together Forever, From This Day Forward
              </p>

              {/* Event details cards */}
              <div className='event-cards'>
                <div className='event-card animate-box' data-animate-effect='fadeInUp'>
                  <div className='event-card-inner'>
                    <h3 className='event-title'>Reception</h3>
                    <div className='event-date'>March 04, 2026</div>
                    <div className='event-time'>6:00 PM onwards</div>
                  </div>
                </div>

                <div className='event-card animate-box' data-animate-effect='fadeInUp'>
                  <div className='event-card-inner'>
            
                    <h3 className='event-title'>Marriage Ceremony</h3>
                    <div className='event-date'>March 05, 2026</div>
                    <div className='event-time'>11:00 AM - 12:00 PM</div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className='hero-buttons'>
                <button 
                  onClick={scrollToLocation}
                  className='btn-primary hero-btn'
                >
                  <i className='ti-location-pin'></i>
                  View Location
                </button>
              
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        
      </div>
    </header>
  )
}

export default Header