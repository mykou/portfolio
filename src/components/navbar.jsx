import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MenuIcon from 'src/components/menu'

const NavContainer = styled.div`
	width: 100%;
	position: fixed;
	top : 0;
	background: rgba(255, 255, 255, .5);
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
		transition:max-height .4s cubic-bezier(0, 1, 0, 1);
		&.show {
			height: auto;
			max-height:200px;
			transition: max-height 0.4s ease-in-out;
		}		
	}
	
`

const LogoLink = styled(props => <Link {...props} />)`
  grid-column: 2;
	text-decoration: none;
	text-shadow: none;
	background-image: none;
	margin: auto;	
	transition: all 0.7s;
	&:hover {
		color: #006450;
		text-shadow: 1px 1px 2px		
	}
`

const MenuLink = styled(props => <Link {...props} />)`
	text-decoration: none;
	text-shadow: none;
	background-image: none;
	padding-left: 1em;
	display: inline-block;
	margin: 0.5em 0;
	transition: all 0.7s;
	&:hover {
		color: #006450;
		text-shadow: 0.5px 0.5px 1px		
	}

	@media only screen and (max-width: 480px) {
		padding-left: 0;
		margin-left: 1em;
		margin-bottom: 0;
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
	margin: 1em;
`



class Navbar extends React.Component {
	
	constructor(props){
		super(props);
		this.state = { toggle: false };			
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
		        					onClick={this.toggleMenu}
		       	 />
		      	</IconContainer>     	
		        
		      </Hamburger>     
		      </div>
					<LeftMenu className={this.state.toggle ? 'show' : ''}>
						<MenuLink to="/about/">About</MenuLink>
						<MenuLink to="/contact/">Contact</MenuLink>
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
