import { css } from '@emotion/css'
import Header from './Header.jsx'
import Nav from './Nav.jsx'

const MainView = (props)=> {
	return <>
		<header>
			<Header />
		</header>

		<main>
			<aside class={asideStyle}>
				<Nav />
			</aside>
			<article>
				<div>steps</div>
				{props.children}
			</article>
		</main>
	</>
}

export default MainView

const asideStyle = css`  
width: 200px;
background-color: #f8fafc;
border-right: 1px solid #e2e8f0;
padding: 20px 0;
height: 100%;
`
