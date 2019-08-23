import React from "react"
import styled, {keyframes} from "styled-components"
import MenuIcon from 'src/components/menu'
import { Link,scrollSpy } from 'react-scroll'
//import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { FaArrowAltCircleDown,FaAngleDoubleUp } from 'react-icons/fa';
import { fadeInUp,fadeOutDown } from 'react-animations';

const breakpoints = {
	xs: '600px',
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

const TopButtonContainer = styled(props => <Link {...props} />)`
	position:absolute;	
	top: calc(100vh - 5rem);	
	display:flex;
	opacity: 0;	
	width:10rem;
	flex-direction: column;
	align-items: center;		
	cursor: pointer;
	&.viewed {
		animation: 2s ${keyframes`${fadeOutDown}`};
	}
	
	&.show {				
		opacity: 1;		
		animation: 2s ${keyframes`${fadeInUp}`};
	}

	@media only screen and (max-width: 1024px) {
		width:6.25rem;
	}

	@media only screen and (max-width: 768px) {
		width:3.75rem;
	}

	@media only screen and (max-width: 480px) {
		width:2.5rem;
	}
`

class Navbar extends React.Component {
	
	constructor(props){
		super(props);
		this.state = { 
			toggle: false,
			jumpOffset: 0,
			visible: false,
			viewedIntro: false
		};					
		// refs
		this.menu = React.createRef();
		this.navbar = React.createRef();		
	}

	componentDidMount(){
		scrollSpy.update();
		document.addEventListener('mousedown', this.handleClickOutside);		
		window.addEventListener('resize', this.handleResize);		
		window.addEventListener('scroll', this.handleScroll);
		this.setState(state => ({
			jumpOffset: this.navbar.current.parentNode.offsetHeight
		}))
	}

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }
  
	handleClickOutside = (e) => {
		if (!this.state.toggle) return;				
		if (this.navbar && !this.navbar.current.contains(e.target)){
			this.setState(state => ({
				toggle: false
			}))
		}
	}

	handleResize = (e) => {  	
  	this.setState(state => ({
			jumpOffset: this.navbar.current.parentNode.offsetHeight
		}))
  }

  handleScroll = (e) => {  	
  	const offset = this.state.jumpOffset;
  	const currentPos = window.scrollY;
  	const visible = (currentPos >= (offset-5));
  	if (visible === this.state.visible) return;  	
		this.setState(state => ({
			visible: visible
		}))
  	if (!this.state.viewedIntro && visible === true){
  		this.setState(state => ({
  			viewedIntro: true
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
		let topBtnClass = '';
		if (this.state.visible) topBtnClass += ' show';
		if (this.state.viewedIntro) topBtnClass += ' viewed';		

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
											spy={true} smooth={true} duration={250}>
							About
						</MenuLink>
						<MenuLink activeClass="active" to="skills-section" onClick={this.toggleMenu}
											spy={true} smooth={true} duration={250}>
							Skills
						</MenuLink>
						<MenuLink activeClass="active" to="experience-section" onClick={this.toggleMenu}
											spy={true} smooth={true} duration={250}>
							Experience
						</MenuLink>
						<MenuLink activeClass="active" to="education-section" onClick={this.toggleMenu}
											spy={true} smooth={true} duration={250}>
							Education
						</MenuLink>
						<DownloadLink target="_blank" 
													href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/mykou/resume/master/Michael-Liu-Resume.pdf">
							Resume&nbsp;<FaArrowAltCircleDown/>						
						</DownloadLink>
					</LeftMenu>
					<LogoLink to="/">
						  <LinkText>MICHAEL</LinkText>
					</LogoLink>
				</Nav>
				<TopButtonContainer className={topBtnClass}
														to="intro-section" smooth={true}>
					<FaAngleDoubleUp style={{fontSize: `2rem`}}/>
					<span><strong>Top</strong></span>
				</TopButtonContainer>
			</NavContainer>
		)
	}
}

export default Navbar
