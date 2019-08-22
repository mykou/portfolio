import React from "react"
import { Helmet } from "react-helmet"

import Introduction from './sections/introduction'
import About from './sections/about'
import Skills from './sections/skills'
import Experience from './sections/experience'
import Education from './sections/education'

class App extends React.Component {
	render() {
		return (
			<>
				<Helmet>
          <meta charSet="utf-8" />
          <title>Michael Liu</title>          
        </Helmet>
				<Introduction/>	
				<About/>
				<Skills/>
				<Experience/>
				<Education/>
			</>
		)
	}
}

export default App