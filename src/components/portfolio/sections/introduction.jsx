import React from "react"
import styled from "styled-components"
import Navbar from 'src/components/navbar'
import SocialIcons from 'src/components/socialIcons'
import Footer from 'src/components/footer'

const IntroductionContainer = styled.div`
	min-height: 100vh;
	display: flex;
	flex-flow: column;
	height: 100%;	
	position: relative;
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
	margin-bottom: 2rem;
`

const Picture = styled.img`
	height: 40vw;
	border-radius: 50%;
	max-height: 400px;
	margin-bottom: 0;	
	@media only screen and (max-width: 1368px) {
			max-height: 225px;
		}
`

const Greeting = styled.h1`
	font-weight: 500;
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

const TagLine = (props) => (
	<TagContainer>
		{props.tags.map(item => (
			<TagWrapper>
				<Tag>{item}</Tag>
			</TagWrapper>	
		))}
	</TagContainer>
)

class Introduction extends React.Component {
	//arrTags = ['Full Stack Developer', 'Creator', 'Enthusiast'];
	render() {
		return (
			<IntroductionContainer id="intro-section">
				<Navbar/>
				<Main>
					<IntroWrapper>
						<Picture src='/me.png' alt='Picture of me'/>
						<Greeting>Hello, I'm Michael!</Greeting>
						<TagLine tags={['Full Stack Developer', 'Creator', 'Enthusiast']}/>
						<SocialIcons/>
					</IntroWrapper>
				</Main>				
				<Footer to="about-section"/>
			</IntroductionContainer>			
		)
	}
}

export default Introduction