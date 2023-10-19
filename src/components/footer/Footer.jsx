import React from 'react'
import lock from '../../assets/lock.png'
import './Footer.css'
function Footer() {
  return (
    <footer>
      <div>
        <span>Copyright (c) 2023</span>
        <span><a href="mailTo: saudemedicalservices@gmail.com">saudemedicalservices@gmail.com</a></span>
      </div>
      <div>
        <img src={lock} alt='lock icon image'></img>
        <span>Secure 256-bit SSL encryption.</span>
      </div>
    </footer>
  )
}

export default Footer