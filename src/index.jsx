import { render } from 'solid-js/web'
import { Route, Router } from '@solidjs/router'
import App from './App.jsx'
import 'modern-normalize/modern-normalize.css'
import './styles.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

const routedApp = <Router root={App}>
	<Route path='/' component={Home} />
	<Route path='/about' component={About} />
	<Route path='/services' component={Services} />
	<Route path='/contact' component={Contact} />
</Router>

const root = document.querySelector('#root')
render(()=> routedApp, root)
