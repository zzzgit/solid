import { For } from 'solid-js'
export default function Services(){
	const services = [
		{
			title: 'Web 開發',
			description: '使用現代化框架構建響應式網站',
			icon: '💻',
		},
		{
			title: '移動應用',
			description: '跨平台移動應用開發解決方案',
			icon: '📱',
		},
		{
			title: 'UI/UX 設計',
			description: '用戶界面和用戶體驗設計服務',
			icon: '🎨',
		},
	]

	return (
		<div>
			<h1 style={{ color: '#1e293b', 'margin-bottom': '20px' }}>我們的服務</h1>
			<div style={{ display: 'grid', gap: '20px' }}>
				<For each={services}>{service=> <div style={{
					'background-color': '#f1f5f9',
					padding: '20px',
					'border-radius': '8px',
					border: '1px solid #e2e8f0',
				}}>
					<div style={{
						display: 'flex', 'align-items': 'center', 'margin-bottom': '12px',
					}}>
						<span style={{ 'font-size': '24px', 'margin-right': '12px' }}>{service.icon}</span>
						<h3 style={{ margin: '0', color: '#1e293b' }}>{service.title}</h3>
					</div>
					<p style={{
						margin: '0', color: '#64748b', 'line-height': '1.5',
					}}>
						{service.description}
					</p>
				</div>}</For>
			</div>
		</div>
	)
}
