import React from 'react'
import styled from "styled-components"
import Footer from 'src/components/footer'

const AboutContainer = styled.div`
	min-height: 100vh;	
	display: flex;
	flex-flow: column;
	align-items: center; 
	justify-content: center;
`
const Content = styled.div`		
	height: 100%;
`

function getYearsExperience(){
	var start = new Date(2017,3,4).getTime(); // date started ISS
	var curr = new Date().getTime();
	var yearsBetween = (curr - start)/(1000*60*60*24*365.25);
	var years = Math.floor(yearsBetween);
	var percentOfYear = yearsBetween - years;
	var yearText = (years < 5) ? 'approximately ' : '';
	if (years < 5 && percentOfYear > 0.25 && percentOfYear< 0.75) {
		yearText += years.toString() + '½'
	} else if (years >= 5 && percentOfYear < 0.8){
		yearText += years.toString();
	} else {
		yearText += Math.round(yearsBetween);
	}	
	return yearText;
}

function Emoji(props){
	return <span role="img" aria-label={props.label}>{props.content}</span>
}

export default () => (
  <AboutContainer id="about-section" className="section">
  	<Content className="content">
  		<h2>About</h2>
  		<p>  			
				I'm a full-stack developer with {getYearsExperience()}&nbsp;years 
				industry experience in software development.
			</p>
			<p>
				I enjoy designing responsive, user-friendly websites like this one I made for my portfolio.

				This site was built using React without any front-end framework.
				Styling was done using Styled&nbsp;Components and Typography.js for fonts.
			</p>
			<p>
				When I'm not working/coding you'll find playing sports or working out.
				I enjoy 
				basketball&nbsp;<Emoji label="basketball" content="🏀"></Emoji>,
				volleyball&nbsp;<Emoji label="volleyball" content="🏐"></Emoji>,
				tennis&nbsp;<Emoji label="volleyabll" content="🎾"></Emoji>, 
				and lifting&nbsp;<Emoji label="weightlifting" content="🏋"></Emoji>.
			</p>  		
  	</Content>
  	<Footer to="skills-section"/>
  </AboutContainer>
)