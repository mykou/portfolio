import React from 'react'
import styled from "styled-components"
import Event from 'src/components/event'
import Footer from 'src/components/footer'

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

const EventContainer = styled.div`
	width: 100%;
	margin-top: 1.5rem;
`

const DescriptionHeading = styled.span`
	letter-spacing: 0.75px;
	text-transform: uppercase;	
`

const UnorderedList = styled.ul`
	margin-top: 0.5rem;
  list-style: circle;
`

function ListItem(props){
  return (
    <li>
      <span>
        {props.children}
      </span>
    </li>
  )
}

export default () => (
  	<ExpContainer id="experience-section" className="section">
  		<Content className="content">
  			<h2>Experience</h2>
  			<EventContainer>
  				<Event logoUrl="/iss.png" subtitle="Application Programmer"
  							 title="Integrated Software Solutions" website="https://intsoftsol.com"
  							 footer="Apr 2017 - Current | Sydney, AU" colorScheme="dark">
  					<DescriptionHeading>Role & Responsibilities</DescriptionHeading>
  					<UnorderedList>
  						<ListItem>Jack All</ListItem>
  					</UnorderedList>
  					<DescriptionHeading>Achievements</DescriptionHeading>
  					<UnorderedList>
  						<ListItem>None</ListItem>
  					</UnorderedList>
  				</Event>
  				<Event logoUrl="/cwh.png" subtitle="Pharmacy Assistant"
  							 title="Chemist Warehouse" website="https://www.chemistwarehouse.com.au/"
  							 footer="Jun 2011 - Apr 2017 | Sydney, AU" colorScheme="dark">
  					<DescriptionHeading>Role & Responsibilities</DescriptionHeading>
  					<UnorderedList>
  						<ListItem>Jack All</ListItem>
  					</UnorderedList>
  					<DescriptionHeading>Achievements</DescriptionHeading>
  					<UnorderedList>
  						<ListItem>None</ListItem>
  					</UnorderedList>
  				</Event>		
  			</EventContainer>
  		</Content>
      <Footer to="education-section"/>
  	</ExpContainer>
)