import React from "react"
import Introduction from './sections/introduction'
import About from './sections/about'
import Experience from './sections/experience'
import Education from './sections/education'

class App extends React.Component {
	render() {
		return (
			<>
				<Introduction/>	
				<About/>
				<Experience/>
				<Education/>
			</>
		)
	}
}

export default App