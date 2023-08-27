import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsCameraVideoFill, BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

function Contact() {
  return (
    <section className='c-wrapper'>
        <div className='paddings innerWidth flexCenter c-container'>
            {/* left side  */}
            <div className='flexColStart c-left'>
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy To Contact Us:</span>
                <span className='secondaryText'>
                    We are always ready to help our users by providing the best services. 
                    We believe that a all our users should have a good place to live.
                </span>
            
                <div className='flexColStart contactModes'>
                    {/* first row */}
                    <div className='flexStart row'>
                        <div className='flexColCenter mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <MdCall size={25}/>
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>+92 332 9000504</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>Call Now</div>            
                        </div>

                        {/* second mode */}
                        <div className='flexColCenter mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>+92 332 9000504</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>Chat Now</div>            
                        </div>
                    </div>

                    {/* second row */}
                    <div className='flexStart row'>
                        <div className='flexColCenter mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <BsCameraVideoFill size={25}/>
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Video Call</span>
                                    <span className='secondaryText'>+92 332 9000504</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>Video Call Now</div>            
                        </div>

                        {/* fourth mode */}
                        <div className='flexColCenter mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Message</span>
                                    <span className='secondaryText'>+92 332 9000504</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>Message Us</div>            
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className='c-right'>
                <div className='image-container'>
                    <img src='./contact.jpg' alt='House'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact