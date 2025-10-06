import Header from './parts/Header.js'
import Nav from './parts/Nav.jsx'
import { css } from 'solid-styled-components'

const App = (props)=> {
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

export default App

const asideStyle = css`  
  width: 200px;
  background-color: #f8fafc;
  border-right: 1px solid #e2e8f0;
  padding: 20px 0;
  height: 100%;
`
