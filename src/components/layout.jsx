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

	& p {
		margin-bottom: 1rem;
	}

	& .section {
		padding-top: 3rem;
	}

	& > div:nth-child(odd) {
		/*background: #e7fbf7;*/
	}
	& > div:nth-child(even) {
		background: #f8fefd;
	}

	& a {
		text-decoration: none;		
		background-image: none;
		transition: all 0.7s;					
		text-shadow: none;	
	}
	& a:hover {		
		color: #198f78;
		text-shadow: -.25px 0, 0 .25px, .25px 0, 0 -.25px;		
	}
`

export default ({ children }) => (  
  <Layout>  	  	
    {children}
  </Layout>  
)