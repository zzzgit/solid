/* @jsxImportSource solid-js */

export default function Header(){
	return (
		<header style={{
			height: '60px',
			'background-color': '#2563eb',
			color: 'white',
			display: 'flex',
			'align-items': 'center',
			padding: '0 20px',
			'box-shadow': '0 2px 4px rgba(0,0,0,0.1)',
		}}>
			<div style={{
				'font-size': '24px',
				'font-weight': 'bold',
			}}>
				🚀 My Solid App
			</div>
		</header>
	)
}
