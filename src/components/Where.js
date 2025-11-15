import React from 'react'
import where1 from '../assets/images/location.png'
import vysyaLogo from '../assets/images/vysya.png'

function Where () {
  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/QwaMHPmgyYLnnWHg7', '_blank');
  };

  return (
    <div id='whenwhere' className='whenwhere section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30 text-center'>
            <span className='oliven-title-meta'>Location</span>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-lg-6'>
            <div className='location-card'>
              <div className='location-map-wrapper' onClick={handleLocationClick}>
                <img src={where1} alt='Vysya Mahal Location' className='location-map' />
                <div className='map-overlay'>
                  <div className='map-icon'>
                    <i className='ti-location-pin'></i>
                  </div>
                  <span className='click-hint'>Click to view in maps</span>
                </div>
              </div>
              <div className='location-content'>
                <div className='venue-icon'>
                  <img src={vysyaLogo} alt='Vysya Mahal' className='venue-logo' />
                </div>
                <h3 className='venue-name'>Vysya Mahal</h3>
                <div className='location-divider'>
                  <span className='divider-dot'></span>
                </div>
                <p className='venue-address'>
                  <i className='ti-location-pin'></i>
                  M56Q+6H5, Military Rd, Ammapet<br/>
                  Salem, Tamil Nadu 636003
                </p>
                <button 
                  onClick={handleLocationClick}
                  className='location-btn'
                >
                  <i className='ti-location-pin'></i>
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where