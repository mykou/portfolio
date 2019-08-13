import React from 'react'
import styled from "styled-components"
//import {scrollSpy} from 'react-scroll'

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
  <AboutContainer id="about-section">
  	<Content className="content">
  		<h2>About</h2>
  		<p>  			
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Sed dapibus lorem ac consectetur ultrices. 
				Donec facilisis laoreet urna. 
				Suspendisse condimentum ex sit amet elit suscipit, sed accumsan odio pharetra. 
				Duis lacinia sagittis ipsum, non semper tortor cursus nec. 
				Sed a quam cursus, euismod nunc a, volutpat augue. 
				Nullam efficitur ut mi sit amet finibus. 
				Duis pulvinar finibus condimentum.
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
  </AboutContainer>
)