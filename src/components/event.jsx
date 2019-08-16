import React from "react"
import styled from "styled-components"

const breakpoints = {
	xs: '480px',
	sm: '768px'
}

const EventWrapper = styled.div`
	box-shadow: 0px 0px 5px black;
	margin-bottom: 1.5rem;
	background: white;
	&.dark {
		background: #f8fefd;
	}
`

const EventHeader = styled.div`	
	border-bottom-style: solid;
	border-width: 1px;
	border-color: #bbbbbb;
	display:grid;
	grid-template-columns: auto auto 1fr;
	
`
const LogoLink = styled.a`	
	grid-column: 1;
	@media only screen and (max-width: ${breakpoints["sm"]}) {
		grid-column: 1 / 4;
	}
`

const EventLogo = styled.img`
	display: block;
	width: 64px;
	margin: 0.75rem 1rem;
	@media only screen and (max-width: ${breakpoints["sm"]}) {
		margin: 0.25rem auto;
	}
`

const EventTitle = styled.a`
	grid-column: 2;
	margin: auto 0;
	font-size: 1.125rem;
	text-transform: uppercase;
	@media only screen and (max-width: ${breakpoints["sm"]}) {
		grid-column: 1 / 4;
		text-align:center; 
		margin: 0 0.5rem;
	}
`

const Subtitle = styled.span`
	grid-column: 3;
	text-align: right;
	margin: auto 1rem;
	@media only screen and (max-width: ${breakpoints["sm"]}) {
		grid-column: 1 / 4;
		text-align:center;
		margin: 0 0.5rem;
	}
`

const EventDescription = styled.div`
	margin: 1rem;
	font-size:0.8rem;
`

const EventFooter = styled.div`
	background: #f6f6f6;
`

const FooterText = styled.span`
	display: inline-block;
	margin: 0.5rem 1rem;
	font-size: 0.75rem;
`

export default (props) => (  
  <EventWrapper className={props.colorScheme}>
		<EventHeader>
			<LogoLink href={props.website}>
				<EventLogo src={props.logoUrl} alt="" />
			</LogoLink>
			<EventTitle target="_blank" href={props.website}>{props.title}</EventTitle>
			<Subtitle>{props.subtitle}</Subtitle>
		</EventHeader>
		<EventDescription>
			{props.children}
		</EventDescription>
		<EventFooter>
			<FooterText>{props.footer}</FooterText>	
		</EventFooter>  			
	</EventWrapper>  
)