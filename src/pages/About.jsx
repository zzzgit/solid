export default function About(){
	return (
		<div>
			<h1 style={{ color: '#1e293b', 'margin-bottom': '20px' }}>關於我們</h1>
			<div style={{
				'background-color': '#f1f5f9',
				padding: '20px',
				'border-radius': '8px',
				'margin-bottom': '20px',
			}}>
				<p style={{ 'line-height': '1.6', 'margin-bottom': '16px' }}>
					我們是一個專注於現代化 Web 開發的團隊，致力於使用最新的技術棧來構建高性能的用戶界面。
				</p>
				<p style={{ 'line-height': '1.6', 'margin-bottom': '16px' }}>
					Solid.js 是我們選擇的框架之一，它提供了出色的性能和開發者體驗。
				</p>
			</div>
			<div style={{ color: '#64748b' }}>
				<h3>我們的使命:</h3>
				<ul>
					<li>創造優秀的用戶體驗</li>
					<li>推動 Web 技術的發展</li>
					<li>建立高效的開發流程</li>
				</ul>
			</div>
		</div>
	)
}
