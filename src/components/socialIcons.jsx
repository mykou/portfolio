import React from 'react'
import styled from "styled-components"
import { FaGithub,FaEnvelope,FaLinkedin } from 'react-icons/fa';

const IconContainer = styled.div`
	padding: 0.5rem;
	display: inline-block;	
`

const IconLink = styled.a`
	font-size: 2.5rem;
	padding: 0 0.5rem;
	& svg {
		transition: all 0.4s;
	}
	&:hover svg {				
		transform: scale(0.8);
	}
`

export default () => ( 
	<IconContainer>
		<IconLink target="_blank" href="https://www.linkedin.com/in/michael-liu-78200213a/"><FaLinkedin/></IconLink>
		<IconLink target="_blank" href="mailto:liu.michael.11@gmail.com"><FaEnvelope/></IconLink>
		<IconLink target="_blank" href="https://www.github.com"><FaGithub/></IconLink>
	</IconContainer>
)