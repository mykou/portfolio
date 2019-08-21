import React from 'react'
import styled from "styled-components"
import Footer from 'src/components/footer'

const SkillsContainer = styled.div`
	min-height: 100vh;	
	display: flex;
	flex-flow: column;
	align-items: center; 
	justify-content: center;
`
const Content = styled.div`		
	height: 100%;
`

const TagList = styled.ul`
	list-style: none;
	margin-left: 0;
	& > li {
		margin-right: 0.25rem;
		margin-bottom: 0;
		padding: 0.05rem 0.5rem;
		display: inline-block;
		overflow: hidden;
		background-color: #d8d8d8;
		font-weight: 300;
		text-transform: uppercase;
		:hover{
			background-color: #1ca086;
			color: white;
		}
	}
`


export default () => (
  <SkillsContainer id="skills-section" className="section">
  	<Content className="content">
  		<h2>Skills</h2>
  		<h3>Programming Languages</h3>
  		<TagList>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  			<li>Test</li>
  		</TagList>		
  	</Content>
  	<Footer to="experience-section"/>
  </SkillsContainer>
)