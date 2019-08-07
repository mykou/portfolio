import React from "react"
import Navbar from './navbar'

export default ({ children }) => (
  <>
  <div style={{width: `100%`}}>  	
  	<Navbar/>  	
    {children}
  </div>
  </>
)