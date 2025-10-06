import Header from './components/Header.jsx'
import Aside from './components/Aside.jsx'

const App = (props)=> {
	return (
		<>
			<header>
				<Header />
			</header>

			<main>
				<aside>
					<Aside />
				</aside>
				<article>
					{props.children}
				</article>
			</main>
		</>
	)
}

export default App
