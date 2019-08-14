import React from 'react'
import styled from "styled-components"
import Event from 'src/components/event'

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
  				<Event logoUrl="/blank-profile.png" roleName="Software Developer"
  							 companyName="Testing Company Name" companyUrl="/"
  							 footer="20XX - 20XX | Sydney, AU">
  					<DescriptionHeading>Responsibilities</DescriptionHeading>
  					<UnorderedList>
  						<ListItem>Jack All</ListItem>
  					</UnorderedList>
  					<DescriptionHeading>Achievements</DescriptionHeading>
  					<UnorderedList>
  						<ListItem>None</ListItem>
  					</UnorderedList>
  				</Event>
  				<Event logoUrl="/blank-profile.png" roleName="Assistant"
  							 companyName="Company Name" companyUrl="/"
  							 footer="20XX - 20XX | Sydney, AU">
  					<DescriptionHeading>Responsibilities</DescriptionHeading>
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
  	</ExpContainer>
)