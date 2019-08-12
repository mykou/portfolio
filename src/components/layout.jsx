import React from "react"
import styled from "styled-components"

const Layout = styled.div`
	& .content {
		width: calc(100% - 20rem);	

		@media only screen and (max-width: 1024px) {
			width: calc(100% - 12.5rem);	
		}		
		@media only screen and (max-width: 768px) {
			width: calc(100% - 7.5rem);	
		}
		@media only screen and (max-width: 480px) {
			width: calc(100% - 5rem);	
		}
	}
	& > div:nth-child(odd) {
		background: #e7fbf7;
	}
	& > div:nth-child(even) {
		background: #f8fefd;
	}
`

export default ({ children }) => (  
  <Layout>  	  	
    {children}
  </Layout>  
)