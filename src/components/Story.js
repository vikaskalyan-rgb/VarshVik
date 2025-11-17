import React, { useState } from 'react'
import storyImage from '../assets/images/1.jpg'

function Story () {
  const [isInvitationTamil, setIsInvitationTamil] = useState(false);

  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-40 text-center'>
            <span className='section-subtitle'>INVITATION</span>
            <h2 className='section-title'>The Beginning of Forever</h2>
          </div>
        </div>
        
        {/* Full Width Image */}
        <div className='row'>
          <div className='col-md-12'>
            <div className='story-image-container'>
              <img src={storyImage} className='story-main-image' alt='Varsha and Vikas' />
            </div>
          </div>
        </div>

        {/* Content Below Image */}
        <div className='row'>
          <div className='col-md-12'>
            <div className='story-content-wrapper'>
              <div className='story-quote-section'>
                <span className='quote-mark-left'>"</span>
                <h3 className='story-quote-text'>Together in love, bound by tradition</h3>
                <span className='quote-mark-right'>"</span>
              </div>

              <div className='story-paragraphs'>
                <p className='story-lead'>
                  <span className='heart-icon'>♥</span> Two people who feel like home to each other.
                </p>

                <p className='story-line'>Who finish each other's fries and still argue about the last bite 🍟</p>
                <p className='story-line'>Who turn ordinary days into unforgettable memories.</p>
                <p className='story-line'>Who dream the same dreams and laugh at the same silly jokes.</p>

                <p className='story-line'>Who understand each other's silence better than anyone's words.</p>
                <p className='story-line'>Who see the world in the same shade of happy, even on the tough days.</p>
                <p className='story-line'>Who hold hands through chaos and dance through calm.</p>

                <p className='story-lead'>
                  <span className='heart-icon'>♥</span> Who are ready to build a lifetime together, heart to heart, soul to soul
                </p>
              </div>

              <div className='story-divider'>
                <span className='divider-line-left'></span>
                <span className='divider-heart'>♥</span>
                <span className='divider-line-right'></span>
              </div>

              <div className='invitation-section'>
                <button 
                  className='invitation-translate-btn'
                  onClick={() => setIsInvitationTamil(!isInvitationTamil)}
                  title={isInvitationTamil ? 'Switch to English' : 'Switch to Tamil'}
                >
                  {isInvitationTamil ? 'A' : 'அ'}
                </button>

                {isInvitationTamil ? (
                  <>
                    <h4 className='invitation-heading'>ஒன்றாக இருப்பது அழகான இடம்.</h4>
                    <p className='invitation-paragraph'>
                      எங்கள் திருமண விழாவிற்கு உங்களை அழைக்க நாங்கள் மிகவும் ஆசீர்வதிக்கப்பட்டவர்களாக உணர்கிறோம். 
                      உங்கள் பிரசன்னம் எங்கள் சிறப்பு நாளை இன்னும் அர்த்தமுள்ளதாக மாற்றும்.
                    </p>
                  </>
                ) : (
                  <>
                    <h4 className='invitation-heading'>Together is a beautiful place to be.</h4>
                    <p className='invitation-paragraph'>
                      We feel incredibly blessed to invite you to our wedding celebration. 
                      Your presence will make our big day even more meaningful.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story