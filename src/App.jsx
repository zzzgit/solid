import { Route, Router } from '@solidjs/router'
import Header from './components/Header.jsx'
import Aside from './components/Aside.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import './styles.css'

export default function App(){
	return (
		<Router
			root={props=> <div style={{
				height: '100vh',
				display: 'flex',
				'flex-direction': 'column',
			}}>
				<Header />

				<Aside />

				<main style={{
					flex: '1',
					padding: '20px',
					'background-color': '#ffffff',
					'overflow-y': 'auto',
				}}>
					{props.children}
				</main>
			</div>
			}
		>
			<Route path='/' component={Home} />
			<Route path='/about' component={About} />
			<Route path='/services' component={Services} />
			<Route path='/contact' component={Contact} />
		</Router>
	)
}
