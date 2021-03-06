/*
Adapted from https://codepen.io/designcouch/pen/Atyop
Author: Jesse Couch - https://codepen.io/designcouch
*/

import React from "react"
import styled from "styled-components"

const IconContainer = styled.div`
	width: 1.75rem;
  height: 100%;
  position: relative;  
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  padding-bottom:1rem;

  & span {
  	display: block;
	  position: absolute;
	  height: 3px;
	  width: 100%;
	  background: #1ca086;
	  border-radius: 4px;
	  opacity: 1;
	  left: 0;
	  -webkit-transform: rotate(0deg);
	  -moz-transform: rotate(0deg);
	  -o-transform: rotate(0deg);
	  transform: rotate(0deg);
	  -webkit-transition: .25s ease-in-out;
	  -moz-transition: .25s ease-in-out;
	  -o-transition: .25s ease-in-out;
	  transition: .25s ease-in-out;
  }

  & span:nth-child(1) {
  	top: 0px;
  }

  & span:nth-child(2),& span:nth-child(3) {
  	top: 9px;
	}

	& span:nth-child(4) {
  	top: 18px;
	}

	&.open span:nth-child(1) {
	  top: 32px;
	  width: 0%;
	  left: 50%;
	}

	&.open span:nth-child(2) {
	  -webkit-transform: rotate(45deg);
	  -moz-transform: rotate(45deg);
	  -o-transform: rotate(45deg);
	  transform: rotate(45deg);
	}

	&.open span:nth-child(3) {
	  -webkit-transform: rotate(-45deg);
	  -moz-transform: rotate(-45deg);
	  -o-transform: rotate(-45deg);
	  transform: rotate(-45deg);
	}

	&.open span:nth-child(4) {
	  top: 32px;
	  width: 0%;
	  left: 50%;
	}
`

class MenuIcon extends React.Component {		
	render() {
		return (
			<IconContainer {...this.props}>
		  	<span></span>
		  	<span></span>
		  	<span></span>
		  	<span></span>
			</IconContainer>
		)
	}
}
	
export default MenuIcon
