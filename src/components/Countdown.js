import React, { useEffect, useState } from 'react'

function Countdown () {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isWeddingDay, setIsWeddingDay] = useState(false);

  useEffect(() => {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    
    const weddingDate = "Mar 04, 2026 00:00:00";
    const countDown = new Date(weddingDate).getTime();
    
    const x = setInterval(() => {    
      const now = new Date().getTime();
      const distance = countDown - now;

      if (distance < 0) {
        setIsWeddingDay(true);
        clearInterval(x);
      } else {
        setTimeLeft({
          days: Math.floor(distance / day),
          hours: Math.floor((distance % day) / hour),
          minutes: Math.floor((distance % hour) / minute),
          seconds: Math.floor((distance % minute) / second)
        });
      }
    }, 1000);

    return () => clearInterval(x);
  }, []);

  if (isWeddingDay) {
    return (
      <div id='countdown' className='countdown-section section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <div className='celebration-content'>
                <div className='celebration-icon'>
                  <i className='ti-heart'></i>
                </div>
                <h2 className='celebration-title'>It's Our Wedding Day!</h2>
                <p className='celebration-text'>The day we've been waiting for is finally here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id='countdown' className='countdown-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center countdown-header'>
            <span className='countdown-subtitle'>Save The Date</span>
            <h2 className='countdown-title'>Countdown to Forever</h2>
            <div className='title-divider'>
              <span className='divider-line'></span>
              <span className='divider-icon'>♥</span>
              <span className='divider-line'></span>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='countdown-wrapper'>
              <div className='countdown-item'>
                <div className='countdown-circle'>
                  <svg className='countdown-svg' viewBox='0 0 120 120'>
                    <circle className='countdown-circle-bg' cx='60' cy='60' r='54'></circle>
                    <circle className='countdown-circle-progress' cx='60' cy='60' r='54'></circle>
                  </svg>
                  <div className='countdown-number'>{timeLeft.days}</div>
                </div>
                <div className='countdown-label'>Days</div>
              </div>
              
              <div className='countdown-separator'>:</div>
              
              <div className='countdown-item'>
                <div className='countdown-circle'>
                  <svg className='countdown-svg' viewBox='0 0 120 120'>
                    <circle className='countdown-circle-bg' cx='60' cy='60' r='54'></circle>
                    <circle className='countdown-circle-progress' cx='60' cy='60' r='54'></circle>
                  </svg>
                  <div className='countdown-number'>{timeLeft.hours}</div>
                </div>
                <div className='countdown-label'>Hours</div>
              </div>
              
              <div className='countdown-separator'>:</div>
              
              <div className='countdown-item'>
                <div className='countdown-circle'>
                  <svg className='countdown-svg' viewBox='0 0 120 120'>
                    <circle className='countdown-circle-bg' cx='60' cy='60' r='54'></circle>
                    <circle className='countdown-circle-progress' cx='60' cy='60' r='54'></circle>
                  </svg>
                  <div className='countdown-number'>{timeLeft.minutes}</div>
                </div>
                <div className='countdown-label'>Minutes</div>
              </div>
              
              <div className='countdown-separator'>:</div>
              
              <div className='countdown-item'>
                <div className='countdown-circle'>
                  <svg className='countdown-svg' viewBox='0 0 120 120'>
                    <circle className='countdown-circle-bg' cx='60' cy='60' r='54'></circle>
                    <circle className='countdown-circle-progress' cx='60' cy='60' r='54'></circle>
                  </svg>
                  <div className='countdown-number'>{timeLeft.seconds}</div>
                </div>
                <div className='countdown-label'>Seconds</div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <p className='countdown-message'>Can't wait to celebrate with you!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown