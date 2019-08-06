import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavContainer = styled.div`
	width: 100%;
`

const Nav = styled.nav`
  max-width: 1720px;
  margin: 0 auto;  
  display: grid;
  grid-template-columns: 1fr auto 1fr;   
`

const MenuToggle = styled.input`
	display: none;	
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
		#nav-toggle:checked ~ & {
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
	transition: all 1s;
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
	transition: all 1s;
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

const HamburgerLabel = styled.label`
	display: none;
	@media only screen and (max-width: 480px) {
		display: inline;
		align-self: center;
		margin-left: 1em;
	}
`
const LinkText = styled.span`
	font-size: 28px;
`

const MenuIcon = styled.img`	
	margin-bottom: 0;
	@media only screen and (max-width: 480px) {			
		position: relative;
		top: 50%;
		transform: translateY(-50%);

	}
`

export default () => (
	<NavContainer>
		<Nav>			
			<MenuToggle type="checkbox" id="nav-toggle"/>
			<div>
      <HamburgerLabel htmlFor="nav-toggle">      	
        <MenuIcon src="/hamburger.png" alt="" width="40px"/>
      </HamburgerLabel>     
      </div>
			<LeftMenu>
				<MenuLink to="/about/">About</MenuLink>
				<MenuLink to="/contact/">Contact</MenuLink>
			</LeftMenu>
			<LogoLink to="/">
				  <LinkText>MICHAEL</LinkText>
			</LogoLink>
		</Nav>
	</NavContainer>
)
