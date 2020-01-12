import React, { useState } from 'react'
import { Link } from 'gatsby'
import { MobileMenu } from './MobileMenu.styles'

export default () => {
  const [open, setOpen] = useState(false)
  return (    
    <MobileMenu>
      <div className={`menu-icon${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`menu ${open ? ' open' : ''}`}>
        <ul>
          <li><Link to="/about/">About Me</Link></li>
          <li><Link to="/services/">Services</Link></li>
          {/* <li><Link to="/news/">News</Link></li> */}
          <li><Link to="/contact/">Contact</Link></li>
        </ul>  
      </div>
    </MobileMenu>
  )
}
