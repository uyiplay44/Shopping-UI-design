import React from 'react'
import './CustomizeStyle.css'
import Photo3 from '../assets/Photo3.png';

const Home = () => {

  return (
    <div className='customize_menu'>
      <div className='item_menu'>
        <p> Fable of Klassik </p>
        <p> - Jacket </p>
      </div>
      <div className="custom_title">
        <div className="photo_custom">
          <img src={Photo3} alt="" />
        </div>
        <div className="info_title">
          <p className='text'>jacket kls</p>
          <p className='text'>€105</p>
          <button className='btn'>Add to Cart</button>
          <div className="info">
            <h6>Product Info</h6>
            <p>Jacket made of a loose fit makes the product a universal element of the upper layer. Two patch pocket and pne hidden pocket. Branded lining with FABLE pattern. Shoulder pads of medium rigidity for shaping.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home