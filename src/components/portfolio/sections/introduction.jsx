import React from "react"
import styled from "styled-components"
import Img from 'react-image'
import Navbar from 'src/components/navbar'

const IntroductionContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-flow: column;
	height: 100%;

`

const Main = styled.main`
	flex-grow : 1;
	display: flex;
  align-items: center;
  justify-content: center;
`

const IntroWrapper = styled.div`
	
`

const Picture = styled(props => <Img {...props}/>)`
	max-height: 100px;
`

class Introduction extends React.Component {
	render() {
		return (
			<IntroductionContainer>
				<Navbar/>
				<Main>
					<IntroWrapper>
						<Picture src='/blank-profile.png' alt=''/>
					</IntroWrapper>
				</Main>
			</IntroductionContainer>			
		)
	}
}

export default Introduction