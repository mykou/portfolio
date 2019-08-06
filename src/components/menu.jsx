import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MenuList = styled.ul`
  list-style: none;
  float: right;
`

const HeaderLink = styled(props => <Link {...props} />)`
  text-shadow: none;
  background-image: none;
`

const ListLink = props => (
	<li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
	<header style={{ marginBottom: `1.5rem` }}>
		<HeaderLink to="/">
		  <h3 style={{ display: `inline` }}>My Site</h3>
		</HeaderLink>
		<MenuList>			
		 	<ListLink to="/about/">About</ListLink>			
			<ListLink to="/contact/">Contact</ListLink>
   	</MenuList>
	</header>	
)
