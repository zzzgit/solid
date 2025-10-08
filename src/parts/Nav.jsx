import { For } from 'solid-js'
import { A } from '@solidjs/router'
import { css } from 'solid-styled-components'
import menu from '../config/menu.js'

const Nav = ()=> {
	return (
		<nav>
			<ul class={ulStyle}>
				<For each={menu}>{item=> <li class={liStyle}>
					<A
						href={item.path}
						class={linkStyle}
						activeClass='active-nav'
					>
						<span class={iconStyle}>
							{item.icon}
						</span>
						{item.label}
					</A>
				</li>}</For>
			</ul>
		</nav>
	)
}

export default Nav

const ulStyle = css`
  list-style: none;
  margin: 0;
  padding: 0;
`

const liStyle = css`
  margin-bottom: 8px;
`

const linkStyle = css`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  text-decoration: none;
  color: #64748b;
  border-radius: 6px;
  margin: 0 10px;
  transition: all 0.2s ease;
`

const iconStyle = css`
  margin-right: 8px;
  font-size: 16px;
`
