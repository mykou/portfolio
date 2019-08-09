import React from "react"
import styled from "styled-components"

const Layout = styled.div`
	& .content {
		width: calc(100% - 20rem);	
		@media only screen and (max-width: 768px) {
			width: calc(100% - 10rem);	
		}
		@media only screen and (max-width: 480px) {
			width: calc(100% - 5rem);	
		}
	}
`

export default ({ children }) => (  
  <Layout>  	  	
    {children}
  </Layout>  
)