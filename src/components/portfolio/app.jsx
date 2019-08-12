import React from "react"
import Introduction from './sections/introduction'
import About from './sections/about'
import Experience from './sections/experience'

class App extends React.Component {
	render() {
		return (
			<>
				<Introduction/>	
				<About/>
				<Experience/>
			</>
		)
	}
}

export default App