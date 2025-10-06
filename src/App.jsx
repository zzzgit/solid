import Header from './components/Header.jsx'
import Aside from './components/Aside.jsx'
import './styles.css'

const App = (props)=> {
	return (
		<>
			<Header />

			<Aside />

			<main >
				{props.children}
			</main>
		</>
	)
}

export default App
