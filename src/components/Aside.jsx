import { For } from 'solid-js'
/* @jsxImportSource solid-js */
import { A } from '@solidjs/router'

export default function Aside(){
	const menuItems = [
		{
			path: '/', label: '首頁', icon: '🏠',
		},
		{
			path: '/about', label: '關於', icon: 'ℹ️',
		},
		{
			path: '/services', label: '服務', icon: '🛠️',
		},
		{
			path: '/contact', label: '聯繫', icon: '📞',
		},
	]

	return (
		<aside style={{
			width: '200px',
			'background-color': '#f8fafc',
			'border-right': '1px solid #e2e8f0',
			padding: '20px 0',
			height: '100%',
		}}>
			<nav>
				<ul style={{
					'list-style': 'none',
					margin: '0',
					padding: '0',
				}}>
					<For each={menuItems}>{item=> <li style={{ 'margin-bottom': '8px' }}>
						<A
							href={item.path}
							style={{
								display: 'flex',
								'align-items': 'center',
								padding: '12px 20px',
								'text-decoration': 'none',
								color: '#64748b',
								'border-radius': '6px',
								margin: '0 10px',
								transition: 'all 0.2s ease',
							}}
							activeClass='active-nav'
						>
							<span style={{ 'margin-right': '8px', 'font-size': '16px' }}>
								{item.icon}
							</span>
							{item.label}
						</A>
					</li>}</For>
				</ul>
			</nav>
		</aside>
	)
}
