import Header from './parts/Header.jsx'
import Nav from './parts/Nav.jsx'
import { css } from 'solid-styled-components'
import { Route, Router } from '@solidjs/router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'

const Layout = (props)=> {
	return (
		<>
			<header>
				<Header />
			</header>

			<main>
				<aside class={asideStyle}>
					<Nav />
				</aside>
				<article>
					{props.children}
				</article>
			</main>
		</>
	)
}

const App = ()=> {
	return (
		<Router>
			<Route path='/' component={Layout}>
				<Route path='/' component={Home} />
				<Route path='about' component={About} />
				<Route path='services' component={Services} />
				<Route path='contact' component={Contact} />
				<Route path='client' component={()=> <div style={{ padding: '20px' }}><h2>Client Page</h2><p>This is the client page content.</p></div>} />
			</Route>
		</Router>
	)
}

export default App

const asideStyle = css`  
	width: 200px;
	background-color: #f8fafc;
	border-right: 1px solid #e2e8f0;
	padding: 20px 0;
	height: 100%;
`
