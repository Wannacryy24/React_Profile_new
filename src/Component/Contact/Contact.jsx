import React, { useEffect, useState } from 'react'
import './contact.css'
import { useScroll } from 'framer-motion'
import ContactForm from '../ContactForm/ContactForm'
export default function Contact() {
  return (
    <div className='contact-whole-div'>
      <div className='contact-div'>
        <div className='contact-object-div'>
          <h3 className='contact-object-div-h3'>React Out Via Socials</h3>
          <p>
            <span>1</span>
            {`.socials{`}
          </p>
          <p>
            <span>2</span>
            <span className='website-span'>website:</span>
            <a href="https://myportfoliovscode.netlify.app/Home" target='_blank'>Portfolio.me</a>
          </p>
          <p>
            <span>3</span>
            <span className='website-span'>email:</span>
            <a href="mailto:mayankverma.dev24@gmail.com" target='_blank'>mayankverma.dev24@gmail.com</a>
          </p>  
          <p>
            <span>4</span>
            <span className='website-span'>github:</span>
            <a href="https://github.com/Wannacryy24" target='_blank'>mygithub profile</a>
          </p>
          <p>
            <span>5</span>
            <span className='website-span'>linkedin:</span>
            <a href="https://www.linkedin.com/in/" target='_blank'>Mayank Linkedin</a>
          </p>
          <p>
            <span>6</span>
            <span className='website-span'>Contact_no:</span>  
            <a href="">8868879095</a>
          </p>
          <p> 
          </p>
          <p>
            <span>7</span>
            {`}`}
          </p>
        </div>
      </div>
      <ContactForm/>
    </div>
  )
}
