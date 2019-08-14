import React from "react"
import styled from "styled-components"
import Navbar from 'src/components/navbar'
import SocialIcons from 'src/components/socialIcons'

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
  padding-top: 2.5rem;
`

const IntroWrapper = styled.div`
	text-align: center;
`

const Picture = styled.img`
	height: 40vw;
	border-radius: 50%;
	max-height: 200px;
	margin: 1rem 0;
`

const Greeting = styled.h1`
	margin: 0;
`

const TagContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: .5rem 0;
	flex-wrap: wrap;
`

const TagWrapper = styled.div`
	margin: 0.5rem 0.5rem 0 0.5rem;
	background: #9cdfd2;
`
const Tag = styled.span`
	padding: .065rem .375rem .125rem;
`
function TagLine(){
	return (
		<TagContainer>
			<TagWrapper>
				<Tag>Full Stack Developer</Tag>
			</TagWrapper>			
			<TagWrapper>
				<Tag>Creator</Tag>
			</TagWrapper>			
			<TagWrapper>
				<Tag>Enthusiast</Tag>
			</TagWrapper>
		</TagContainer>
	)
}


class Introduction extends React.Component {
	render() {
		return (
			<IntroductionContainer>
				<Navbar/>
				<Main>
					<IntroWrapper>
						<Picture src='/blank-profile.png' alt=''/>
						<Greeting>Hello, I'm Michael!</Greeting>
						<TagLine/>
						<SocialIcons/>
					</IntroWrapper>
				</Main>
			</IntroductionContainer>			
		)
	}
}

export default Introduction