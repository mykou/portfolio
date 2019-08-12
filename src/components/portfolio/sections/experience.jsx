import React from 'react'
import styled from "styled-components"

const ExpContainer = styled.div`
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
  	<ExpContainer>
  		<Content className="content">
  			<h1>Experience</h1>
  		</Content>
  	</ExpContainer>
)