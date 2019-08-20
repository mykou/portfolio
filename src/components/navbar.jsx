import React from "react"
import styled from "styled-components"
import MenuIcon from 'src/components/menu'
import { Link,scrollSpy } from 'react-scroll'
//import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {FaArrowAltCircleDown} from 'react-icons/fa';

const breakpoints = {
	xs: '480px',
	sm: '768px'
}

const NavContainer = styled.div`
	z-index:999;
	width: 100%;
	position: fixed;
	top: 0;
	/*background: rgba(248, 254, 253, .85);*/
	background: rgba(255, 255, 255, .95);
`

const Nav = styled.nav`
  margin: 0 auto;  
`

const LeftMenu = styled.div`
	grid-column: 1;
	align-self: center;
	@media only screen and (max-width: ${breakpoints["xs"]}) {		   
		display: grid;		  	
  	grid-column: 1 / 4;	  	  		 	 
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
		@media only screen and (max-width: ${breakpoints["xs"]}) {
			box-shadow: -0.25rem 0px 0px ;
			margin-left:0.25rem;
			padding-left:0.75rem;
		}
	}

	@media only screen and (max-width: ${breakpoints["xs"]}) {
		padding-left: 0;
		margin-left: 1rem;
		margin-bottom: 0;
		padding: 0.3rem 0;
	}
`

const DownloadLink = styled.a`
	margin: 0 1rem;
	display: flex;
	align-items: center;
	padding: 0.5rem 0;
	float: right;

	@media only screen and (max-width: ${breakpoints["xs"]}) {
		padding-left: 0;
		margin-left: 1rem;
		margin-bottom: 0;
		padding: 0.3rem 0;
	}
`

const Hamburger = styled.div`
	display: none;
	@media only screen and (max-width: ${breakpoints["xs"]}) {
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
		this.state = { 
			toggle: false,
			jumpOffset: 0
		};					
		// refs
		this.menu = React.createRef();
		this.navbar = React.createRef();		
	}

	componentDidMount(){
		scrollSpy.update();
		document.addEventListener('mousedown', this.handleClickOutside);		
		window.addEventListener('resize', this.handleResize);		
		this.setState(state => ({
			jumpOffset: this.navbar.current.parentNode.offsetHeight
		}))
	}

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = (e) => {  	
  	this.setState(state => ({
			jumpOffset: this.navbar.current.parentNode.offsetHeight
		}))
  }

	handleClickOutside = (e) => {				
		if (this.navbar && !this.navbar.current.contains(e.target)){
			this.setState(state => ({
				toggle: false
			}))
		}
	}

	toggleMenu = (open) => {				
		if (this.menu.current.props.className === 'open' || open === true){
			this.setState(state => ({
      	toggle: !state.toggle
    	}));    	
		}		
	}

	render() {
		return (
			<NavContainer ref={this.navbar}>
				<Nav>							
					<div>
		      <Hamburger>
		      	<IconContainer>
		      		<MenuIcon className={this.state.toggle ? 'open' : ''} ref={this.menu}
		        					onClick={(e) => this.toggleMenu(true,e)}/>
		      	</IconContainer>     			        
		      </Hamburger>     
		      </div>	      
					<LeftMenu className={this.state.toggle ? 'show' : ''}>						
						<MenuLink activeClass="active" to="about-section" onClick={this.toggleMenu}
											spy={true} smooth={true} duration={500}>
							About
						</MenuLink>
						<MenuLink activeClass="active" to="experience-section" onClick={this.toggleMenu}
											spy={true} smooth={true} duration={500}>
							Experience
						</MenuLink>
						<MenuLink activeClass="active" to="education-section" onClick={this.toggleMenu}
											spy={true} smooth={true} duration={500}>
							Education
						</MenuLink>
						<DownloadLink target="_blank" href="/" >
							Resume&nbsp;<FaArrowAltCircleDown/>						
						</DownloadLink>
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
