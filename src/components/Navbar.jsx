import React  from 'react'
import {FaFacebookF, FaGooglePlusG, Fabars} from 'react-icons/fa'
import { BsChatSquareDots } from 'react-icons/bs'
import { FaFacebook
,  FaTwitter, FaInstagram } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Navbar = () => {
  return (
    <div>
        
        <ul>
            <li>
                <a href="/">Home</a>
            </li>   
            <li>
                <a href="#gallery">Gallery</a>
            </li>
            <li>
                <a href="#deals">Deals</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        
        </ul>

        <div>
            <FaFacebookF   className='mx-4'/>
            <FaTwitter  className='mx-4' />
            <FaInstagram  className='mx-4'/>
   
          </div>

    </div>
  )
}

export default Navbar