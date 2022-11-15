import React from 'react'
import './ProfileStyle.css'
import Photo5 from '../assets/Photo5.png';

const Profile = () => {
  return (
    <div className='main_container'>
        <div className='main__title'>
           <h3>Profile -  Main</h3>
            <h1>Hello, Darya </h1>
        </div>
        <div className='content__tag'>
            <img src={Photo5} alt="item"  className='photo_tag'/>
            <div className="main-cards">
                <div className='content_title'>
                    <p>Bonus card</p>
                    <p>250 points</p>
                </div>
                <div className='content_title'>
                    <p>Cashback</p>
                    <p>5%</p>
                </div>
            </div>
        </div>

        <div className="details_container">
            <h3>Recent Orders</h3>
            <div className="cost_title">
                <div className='cost_container'>
                    <div className='num_head'>
                        <h3>Number</h3> 
                        <p>849234</p>
                        <p>835012</p>
                    </div>
                </div>
                <div className='cost_container'>
                    <div className='num_tag'>
                            <h3>Order</h3> 
                            <p>Jacket KLS Black M, Trousers KLS Black M, Shirt KLS White m</p>
                            <p>Short KLS Graphite S, Jacket KLS Graphite M</p>
                    </div>
                </div>
                <div className='cost_container'>
                    <div className='num_tag'>
                            <h3>Date</h3> 
                            <p>20.09.2022</p>
                            <p>03.11.20021</p>
                    </div>
                </div>
                <div className='cost_container'>
                    <div className='num_tag'>
                            <h3>Summary</h3> 
                            <p>$180</p>
                            <p>$340</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Profile