import { render } from 'solid-js/web'

import App from './App.jsx'

import 'modern-normalize/modern-normalize.css'
import './styles.css'

const root = document.querySelector('#root')

render(<App />, root)
