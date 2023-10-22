import React from 'react';
import Banner1 from '../assets/banner 1.png';
import Banner2 from '../assets/banner 2.png';
import Banner3 from '../assets/banner 3.png';
import '../Styles/RowPost.css'

function RowPost() {
  return (
    <div className='row'>
    <h6>OUR COLLECTIONS</h6>
  <div className="posters">
    <img alt='poster'className='poster' src={Banner1}/>
    <img alt='poster'className='poster' src={Banner2}/>
    <img alt='poster'className='poster' src={Banner3}/>
  </div>
 
</div>

  )
}

export default RowPost