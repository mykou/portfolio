import React from 'react'
import styled from "styled-components"
import Footer from 'src/components/footer'

const AboutContainer = styled.div`
	min-height: 100vh;	
	display: flex;
	flex-flow: column;
	align-items: center; 
	justify-content: center;
`
const Content = styled.div`		
	height: 100%;
`

export default () => (
  <AboutContainer id="about-section" className="section">
  	<Content className="content">
  		<h2>About</h2>
  		<p>  			
				I'm a recent graduate (2018) with approximately 2½ years experience in software development.
			</p>
			<p>
				I enjoy designing responsive, user-friendly websites like this one I made for my portfolio.

				This site was built using React without any front-end framework.
				Styling was done using Styled Components and Typography.js for fonts.
			</p>
			<p>
				Duis mattis nisi ac euismod eleifend. 
				Donec viverra erat quis odio pulvinar, vitae convallis arcu dictum. 
				Vivamus sit amet lectus sed sem facilisis elementum nec ut justo. 
				Cras ornare dolor vel nulla consequat, hendrerit mollis arcu condimentum. 
				Duis sollicitudin tellus maximus erat lobortis pellentesque. 
				Fusce ac urna ac neque pharetra aliquet. 
				Vestibulum dignissim sagittis erat at gravida. 
				Etiam posuere congue vehicula.
			</p>  		
  	</Content>
  	<Footer to="experience-section"/>
  </AboutContainer>
)