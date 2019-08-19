import React from "react"
import styled, {keyframes} from "styled-components"
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { bounce } from 'react-animations';

bounce['40%'].transform = "translate3d(0, -0.25rem, 0)"
bounce['43%'].transform = "translate3d(0, -0.25rem, 0)"
bounce['70%'].transform = "translate3d(0, -0.65rem, 0)"

const FooterWrapper = styled(props => <Link {...props} />)`
	width: 100%;
	text-align:center;
	margin-top: auto;
	cursor: pointer;
	font-size: 1.5rem;
`

const ArrowContainer = styled.div`
	margin: 0 auto;
	position:relative;
	bottom: 0;
	animation: 2s ${keyframes`${bounce}`} infinite;
`
 
export default (props) => (  
   <FooterWrapper to={props.to}
								 smooth={true} duration={500}>
   	<ArrowContainer>
			<FaAngleDown/>			 	
   	</ArrowContainer>
   </FooterWrapper>
)