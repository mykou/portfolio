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
          <Event logoUrl="/deputy.png" subtitle="Software Engineer (Implementations)"
                 title="Deputy" website="https://www.deputy.com/"
                 footer="Oct 2019 - Feb 2020 | Sydney, AU" >
            <DescriptionHeading>Role & Responsibilities</DescriptionHeading>
            <UnorderedList>
              <ListItem>Develop customised solutions for clients depending on specifications</ListItem>
              <ListItem>Collaborating with implementation consultants to develop and implement solutions</ListItem>
              <ListItem>Participate in daily stand-ups and code reviews to ensure quality code</ListItem>
              <ListItem>
                Debugging through application to patch defects within our customised solutions
              </ListItem>
              <ListItem>Create documentation for the customised solutions to be used by engineers and consultants</ListItem>    
            </UnorderedList>        
          </Event>
  				<Event logoUrl="/iss.png" subtitle="Application Programmer"
  							 title="Integrated Software Solutions" website="https://intsoftsol.com"
  							 footer="Apr 2017 - Oct 2019 | Sydney, AU" >
  					<DescriptionHeading>Role & Responsibilities</DescriptionHeading>
  					<UnorderedList>
  						<ListItem>Main engineer for all integration and interfacing projects/issues</ListItem>
              <ListItem>Develop new functionality and improve our core applications</ListItem>
              <ListItem>Debugging through our application to patch defects within our product</ListItem>
              <ListItem>
                Collaborating with cross-functional teams including our product specialists
                and QA teams in order to develop innovative solutions
                for new and existing users
              </ListItem>
              <ListItem>Ensuring smooth go-lives by resolving critical issues</ListItem>
              <ListItem>
                Identifying clients' needs through consistent communication
                and providing efficient, accurate and personalised solutions
              </ListItem>
              <ListItem>Providing on-call support for clients</ListItem>
  					</UnorderedList>
  					<DescriptionHeading>Achievements</DescriptionHeading>
  					<UnorderedList>
  						<ListItem>Designed and created our company’s on-call roster management system</ListItem>
              <ListItem>Became the main interface and integration engineer despite having no previous experience</ListItem>              
  					</UnorderedList>
  				</Event>
  				<Event logoUrl="/cwh.png" subtitle="Pharmacy Assistant"
  							 title="Chemist Warehouse" website="https://www.chemistwarehouse.com.au/"
  							 footer="Jun 2011 - Apr 2017 | Sydney, AU">
  					<DescriptionHeading>Role & Responsibilities</DescriptionHeading>
  					<UnorderedList>
  						<ListItem>
                Responsible for the management and daily functions of all floor staff members
              </ListItem>
              <ListItem>
                Discovered innovative solutions to meet customers' needs in a fast paced environment
              </ListItem>
              <ListItem>
                Reviewed each aisle in order to
                ensure they were in a satisfactory condition
              </ListItem>
  					</UnorderedList>
  					<DescriptionHeading>Achievements</DescriptionHeading>
  					<UnorderedList>
  						<ListItem>
                Effectively displayed time-management skills by balancing 
                part-time work with high school and full-time university studies
              </ListItem>
              <ListItem>
                Promoted to floor manager during time at company
              </ListItem>
  					</UnorderedList>
  				</Event>		
  			</EventContainer>
  		</Content>
      <Footer to="education-section"/>
  	</ExpContainer>
)