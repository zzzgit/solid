import './styles/reset.css'
import './global.css'
import './styles/ark.css'
import { render } from 'solid-js/web'
import App from './App.jsx'

const root = document.querySelector('#root')

render(<App />, root)
