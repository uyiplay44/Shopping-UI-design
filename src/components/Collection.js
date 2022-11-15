import React from 'react'
import './CollectStyle.css'
import Photo4 from '../assets/Photo4.png';
import Photo from '../assets/Photo.png';
import Photo1 from '../assets/Photo1.png';


const Collection = () => {
  return (
    <div className="collect_menu">
        <div className="list">
          <h3>Fable of Klassik</h3>
          <h2>Jackets KLS</h2>
        </div>
    <div className="photo__title">
      <div className="collect__price">
        <img src={Photo4} alt="item 1" />
        <h5 className='title_tag'>Jacket KLS Beige</h5>
        <p>€105</p>
      </div>

      <div className="collect__price">
        <img src={Photo} alt="item 2" />
        <h5 className='title_tag'>Jacket KLS Beige</h5>
        <p>€105</p>
      </div>


      <div className="collect__price">
        <img src={Photo1} alt="item 3" />
        <h5 className='title_tag'>Jacket KLS Beige</h5>
        <p>€105</p>
      </div>

    </div>
      
    </div>
     
    
  )
}

export default Collection