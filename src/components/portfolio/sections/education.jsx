import React from 'react'
import styled from "styled-components"
import Event from 'src/components/event'

const EduContainer = styled.div`
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
  	<EduContainer id="education-section" className="section">
  		<Content className="content">
  			<h2>Education</h2>
  			<EventContainer>
  				<Event logoUrl="/unsw.png" subtitle="Undergraduate Education"
  							 title="University of New South Wales" website="https://www.unsw.edu.au/"
  							 footer="2014 - 2018 | Sydney, AU">
  					<h4>Bachelor of Engineering (Software&nbsp;Engineering)</h4>
            <p>
              Learnt about the processes, methods and tools for the design and development of high quality, reliable software systems.
              It involved the study and application of software specification, design, implementation, testing and documentation.
              The degree also included a series of workshops that allowed us to work collaboratively with others and gain hands-on experience.     
            </p>
            <DescriptionHeading>Awards & Achievements</DescriptionHeading>
  					<UnorderedList>
  						<ListItem>Honours Class 2 Division 1</ListItem>
              <ListItem>The Macquarie SENG2020 Group Prize 2015<br/>
                        <i>For the best presentation by a group in 
                        SENG2020 Software Engineering Workshop 2B</i></ListItem>
  					</UnorderedList>  					
  				</Event>
  				<Event logoUrl="/trinity.png" subtitle="High School"
  							 title="Trinity Grammar School" website="https://www.trinity.nsw.edu.au/"
  							 footer="2008 - 2013 | Sydney, AU">
  				</Event>		
  			</EventContainer>
  		</Content>
  	</EduContainer>
)