import React from "react"
import styled from "styled-components"
import MenuIcon from 'src/components/menu'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavContainer = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	/*background: rgba(248, 254, 253, .85);*/
	background: rgba(255, 255, 255, .85);
`

const Nav = styled.nav`
  margin: 0 auto;  
  display: grid;
  grid-template-columns: 1fr auto 1fr;   
`

const LeftMenu = styled.div`
	grid-column: 1;
	align-self: center;
	@media only screen and (max-width: 480px) {		   
		display: grid;		
  	grid-row: 2;
  	grid-column-start: 1;
		grid-column-end: 4;		  	  		 	 
		max-height: 0;
		overflow: hidden;
		transition:max-height 1s cubic-bezier(0, 1, 0, 1);
		&.show {
			height: auto;
			max-height:200px;
			transition: max-height 0.4s ease-in-out;
		}		
	}
	
`

const LogoLink = styled(props => <Link {...props} />)`
  display: none;
  grid-column: 2;
	margin: auto;		
`

const MenuLink = styled(props => <Link {...props} />)`
	margin-left: 1rem;
	display: inline-block;
	padding: 0.5rem 0;
	cursor: pointer;

	&.active {
		box-shadow: 0 4px 2px -2px #1ca086;
		@media only screen and (max-width: 480px) {
			box-shadow: -0.25rem 0px 0px ;
			margin-left:0.25rem;
			padding-left:0.75rem;
		}
	}

	@media only screen and (max-width: 480px) {
		padding-left: 0;
		margin-left: 1rem;
		margin-bottom: 0;
		padding: 0.3rem 0;
	}
`

const Hamburger = styled.div`
	display: none;
	@media only screen and (max-width: 480px) {
		display: inline;
		align-self: center;		
	}
`
const LinkText = styled.span`
	font-size: 28px;
`

const IconContainer = styled.div`	
	margin: 1rem;	
`

class Navbar extends React.Component {
	
	constructor(props){
		super(props);
		this.state = { toggle: false };			
	}

	componentDidMount(){
		scrollSpy.update();
	}

	toggleMenu = () => {
		this.setState(state => ({
      toggle: !state.toggle
    }));    
	}

	render() {
		return (
			<NavContainer>
				<Nav>							
					<div>
		      <Hamburger>
		      	<IconContainer>
		      		<MenuIcon className={this.state.toggle ? 'open' : ''}
		        					onClick={this.toggleMenu}/>
		      	</IconContainer>     			        
		      </Hamburger>     
		      </div>
					<LeftMenu className={this.state.toggle ? 'show' : ''}>
						<MenuLink activeClass="active" to="about-section" offset={0}
											spy={true} smooth={true} duration={500}>
							About
						</MenuLink>
						<MenuLink activeClass="active" to="experience-section"
											spy={true} smooth={true} duration={500}>
							Experience
						</MenuLink>
					</LeftMenu>
					<LogoLink to="/">
						  <LinkText>MICHAEL</LinkText>
					</LogoLink>
				</Nav>
			</NavContainer>
		)
	}
}

export default Navbar
