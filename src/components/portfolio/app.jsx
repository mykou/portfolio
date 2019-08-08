import React from "react"
import Introduction from './sections/introduction'
import About from './sections/about'

class App extends React.Component {
	render() {
		return (
			<>
				<Introduction/>	
				<About/>							
			</>
		)
	}
}

export default App