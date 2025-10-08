import { Route, Router } from '@solidjs/router'
import Mainview from './parts/Mainview.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Client from './pages/Client.jsx'

const router = ()=> {
	return <Router>
		<Route path='/' component={Mainview}>
			<Route path='/' component={Home} />
			<Route path='about' component={About} />
			<Route path='services' component={Services} />
			<Route path='contact' component={Contact} />
			<Route path='client' component={Client} />
		</Route>
		<Route path='/*' component={()=> <div style={{ padding: '20px' }}>
			<h2>404 Not Found</h2>
			<p>The page you are looking for does not exist.</p>
		</div>} />
	</Router>
}

const App = ()=> {
	return router()
}

export default App
