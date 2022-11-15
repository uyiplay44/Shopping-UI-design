import React from 'react'
import './SaleStyle.css'
import Photo1 from '../assets/Photo1.png';
import Photo from '../assets/Photo.png';


const Sale = () => {
  return (
    <div className='shopping_container'>
      <div className="top">
        <h1>Shopping Bag - Order</h1>
      </div>
      <div className="form_title">
        <div className="form__container">
          <form className='form_tag'>
              <div className='item_input'>
                <h1>City</h1>
                <input type="text"  placeholder='Enter City'/>
              </div>
              <div className='item_1'>
                <h1>Address</h1>
                <input type="text"  placeholder='Enter Address '/>
              </div>
              <div className='item_2'>
                <h1> Receipient Details</h1>
                <h3> Name and Surname </h3>
                <input type="text"  placeholder='Enter name and surname'/>
              </div>
              <div className='item_3'>
                <h1>Phone</h1>
                <input type="number"   placeholder='Enter phone number'/>
              </div>
              <div className='item_4'>
                <h1>Email</h1>
                <input type="email"  placeholder='Enter email' />
              </div>
              <div className='item_5'>
                <h1>Payment Method</h1>
                <div className="btn_container">
                    <button className='btn_p'>Payment card</button>
                    <button className='btn_p'>Cash on Delivery</button>
                </div>
              </div>
          </form>
          <div className='check_box'>
            <input type="checkbox" />
            <p>I agree to the terms of the offer and the loyalty policy</p>
          </div>
          <button className='btn_p_tag'>Place an order</button>
        </div>



      <div className="details_content">
        <div className="shop__log">
          <img src={Photo1} alt=" shop" />
          <div className='details_container'>
            <h5>Jacket KLS</h5>
            <p>Collection: KLASSIK OF FABLE</p>
            <p>Article: H0522001</p>
            <p>Size: M  Color: Black    Quantity: - 1 + </p>
            <p>Price:   €105</p>
          </div>
        </div>
        <div className="shop__log">
          <img src={Photo} alt=" shop" />
          <div className='details_container'>
            <h5>Jacket KLS</h5>
            <p>Collection: KLASSIK OF FABLE</p>
            <p>Article: H0522001</p>
            <div className="detail_tag">
              <p>Size: M </p>
              <p>Color: Black</p>    
             <p>Quantity: - 1 +</p> 
            </div>
            <p>Price:   €125</p>
          </div>
        </div>
        <div className="shop__log">
          <img src={Photo1} alt=" shop" />
          <div className='details_container'>
            <h5>Jacket KLS</h5>
            <p>Collection: KLASSIK OF FABLE</p>
            <p>Article: H0522001</p>
            <p>Size: M  Color: Black    Quantity: - 1 + </p>
            <p>Price:   €110</p>
          </div>
        </div>

        <div className="summary_sect">
          <div className='summary'>
            <p>Summary:</p>
            <p>Delivery:</p>
            <p>Promocode:</p>
          </div>
          <div className="all_amount">
            <p>€340</p>
            <p>€0</p>
            <p>€0</p>
          </div>
        </div>
        <div className="total">
            <p>Total:</p>
            <p>€340</p>
        </div>
        <div className="apply">
              <input type="text" placeholder='Enter promocode' />
              <button type='submit' className='btn_1'>Apply</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Sale