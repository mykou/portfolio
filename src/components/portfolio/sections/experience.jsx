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
  margin-bottom: 1rem;
  list-style: circle;
`

const Item = styled.li`
  margin-bottom: calc(0.5rem / 2);
`

function ListItem(props){
  return (
    <Item>
      <span>
        {props.children}
      </span>
    </Item>
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
  						<ListItem>Main engineer for all integration and interfacing projects/issues</ListItem>
              <ListItem>Develop new and improve functionality in our core applications</ListItem>
              <ListItem>Debugging through our application to patch defects within our product</ListItem>
              <ListItem>
                Working closely with our product specialists and QA teams to develop solutions 
                suitable for new and existing users
              </ListItem>
              <ListItem>Ensuring smooth go-lives by resolving critical issues</ListItem>
              <ListItem>
                Communicating and working with clients to understand their issues, 
                and to create a solution tailored to their needs
              </ListItem>
              <ListItem>Providing on-call support for clients</ListItem>
  					</UnorderedList>
  					<DescriptionHeading>Achievements</DescriptionHeading>
  					<UnorderedList>
  						<ListItem>Designed and created the company’s on-call roster management system</ListItem>
              <ListItem>Became the main interface/integration engineer from having no experience</ListItem>              
  					</UnorderedList>
  				</Event>
  				<Event logoUrl="/cwh.png" subtitle="Pharmacy Assistant"
  							 title="Chemist Warehouse" website="https://www.chemistwarehouse.com.au/"
  							 footer="Jun 2011 - Apr 2017 | Sydney, AU" colorScheme="dark">
  					<DescriptionHeading>Role & Responsibilities</DescriptionHeading>
  					<UnorderedList>
  						<ListItem>
                Floor manager supervising all floor staff
              </ListItem>
              <ListItem>
                Point of escalation to remedy issues raised by customers
              </ListItem>
              <ListItem>
                Responsible for reviewing each aisle to 
                ensure they were in a satisfactory condition
              </ListItem>
  					</UnorderedList>
  					<DescriptionHeading>Achievements</DescriptionHeading>
  					<UnorderedList>
  						<ListItem>
                Successfully balanced part-time work with high school 
                and a full-time study load at university
              </ListItem>
  					</UnorderedList>
  				</Event>		
  			</EventContainer>
  		</Content>
      <Footer to="education-section"/>
  	</ExpContainer>
)