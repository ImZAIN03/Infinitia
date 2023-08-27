import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <section className='f-wrapper'>
        <div className='paddings innerWidth flexCenter f-container'>
        {/* left side */}
            <div className='flexColStart f-left'>
                <img src='logo2.png' alt='ZeeState' width={120}/>

                <span className='secondaryText'>
                    Our vision is to give people <br/>
                    the place of their dreams.  
                </span>            
            </div>

            <div className='flexColStart f-right'>
                <span className='primaryText'>Infromation</span>
                <span className='secondaryText'>Peshawar, KPK, Pakistan</span>

                <div className='flexCenter f-menu'>
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer