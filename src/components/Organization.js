import React from 'react'
import ceremony1 from '../assets/images/ceremony 1.jpg'
import ceremony2 from '../assets/images/ceremony 2.jpg'
import ceremony3 from '../assets/images/ceremony 3.jpg'
import ceremony4 from '../assets/images/ceremony 4.jpg'
import ceremony5 from '../assets/images/ceremony 5.jpg'
import ceremony6 from '../assets/images/ceremony 6.jpg'

function Organization () {
  const ceremonies = [
    {
      number: "01",
      title: "VRATHAM",
      description: "This is conducted to convey a message to the groom that he has to prepare himself to move from Brahmacharyam (Bachelor) to Grahasthashramam (Married life). Prayers will be conducted to seek the blessings of the ancestors.",
      image: ceremony1
    },
    {
      number: "02",
      title: "KASI YATRAI",
      description: "The groom decides to give up worldly pleasures and prepares to go to Kasi to lead the life of an ascetic. The parents and the Guru advise the groom to marry the bride and enter Grahastashrama — the sacred family life.",
      image: ceremony2
    },
    {
      number: "03",
      title: "THE 'UNJAL' CEREMONY",
      description: "The bride and the groom sit on the swing. Friends and relatives display their talent in classical music, providing festivity to the atmosphere. The Unjal (swing) signifies the ups and downs of life.",
      image: ceremony3
    },
    {
      number: "04",
      title: "MANGALYA DHARANAM",
      description: "The most precious moment in one's life. The bride sits on her father's lap. The groom ties the Mangalya Sutra around the bride's neck with prayers for his well-being and for her to live a hundred years.",
      image: ceremony4
    },
    {
      number: "05",
      title: "PANIGRAHANAM",
      description: "The groom holds the bride's right hand and recites the marriage vows in four mantras. He prays to Agni, Saraswathi, and Vayu for blessings, long life, and confluence of mind.",
      image: ceremony5
    },
    {
      number: "06",
      title: "NALANGU",
      description: "The evening of the marriage day is the time to relax and play. The newly-wed wife calls her husband for play, inviting him through a song. Much to the merriment of all gathered, there follows a series of playful events and laughter.",
      image: ceremony6
    }
  ];

  return (
    <div id='organization' className='organization section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30 text-center'>
            <span className='oliven-title-meta'>Vivaha Vaibhavam</span>
            
          </div>
        </div>
        <div className='ceremonies-list'>
          {ceremonies.map((ceremony, index) => (
            <div key={index} className='ceremony-item'>
              <div className='ceremony-image-wrapper'>
                <img src={ceremony.image} alt={ceremony.title} className='ceremony-image' />
              </div>
              <div className='ceremony-text'>
                <h2 className='custom-font ceremony-number'>{ceremony.number}</h2>
                <h5 className='ceremony-title'>{ceremony.title}</h5>
                <p className='ceremony-description'>{ceremony.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Organization