import { css } from '@emotion/css'

export default function Header(){
	return (
		<header class={headerStyle}>
			<h1 class={h1Style}>🚀 My Solid App</h1>
		</header>
	)
}

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c34;
  color: white;
  height: 100%;
`

const h1Style = css`
  font-size: 24px;
  margin: 0;
`
