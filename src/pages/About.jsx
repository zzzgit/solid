import { css } from '@emotion/css'
import Button from '../components/Button.jsx'

export default function About(){
	return (
		<div class={containerStyle}>
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
			<div style={{
				'margin-top': '30px', display: 'flex', gap: '10px',
			}}>
				<Button color='red' variant='solid'>聯繫我們</Button>
				<Button color='red' variant='surface' >聯繫我們</Button>
				<Button color='red' variant='outline'>聯繫我們</Button>
				<Button color='red' loading variant='solid'>聯繫我們</Button>
				<Button color='red' size='lg' class='custom-class'>聯繫我們</Button>
				<Button color='red' size='sm'>聯繫我們</Button>

			</div>
			<div style={{
				'margin-top': '30px', display: 'flex', gap: '10px',
			}}>
				<Button color='blue' size='sm' variant='solid'>聯繫我們</Button>
				<Button color='blue' size='md' variant='surface'>聯繫我們</Button>
				<Button color='blue' size='md' variant='outline'>聯繫我們</Button>
				<Button color='blue' size='lg' variant='solid'>聯繫我們</Button>
				<Button color='blue' size='lg'>聯繫我們</Button>
				<Button color='blue' size='xl' >聯繫我們</Button>

			</div>
			<div style={{
				'margin-top': '30px', display: 'flex', gap: '10px',
			}}>
				<Button expression='primary' size='xl' >primary</Button>
				<Button expression='secondary' size='lg'>secondary</Button>
				<Button expression='danger' size='lg'>danger</Button>
				<Button expression='warning' size='md'>warning</Button>
				<Button expression='info' size='md'>info</Button>
				<Button expression='success' size='sm'>success</Button>
			</div>
			<div style={{
				'margin-top': '30px', display: 'flex', gap: '10px',
			}}>
				<Button color='purple' borderRadius='none' disabled size='sm' variant='solid'>聯繫我們</Button>
				<Button color='purple' borderRadius='sm' disabled size='md' variant='surface'>聯繫我們</Button>
				<Button color='purple' borderRadius='md' disabled size='md' variant='outline'>聯繫我們</Button>
				<Button color='purple' borderRadius='lg' disabled size='lg' variant='solid'>聯繫我們</Button>
				<Button color='purple' borderRadius='lg' disabled size='lg'>聯繫我們</Button>
				<Button color='purple' borderRadius='full' disabled size='xl' >聯繫我們</Button>
			</div>
		</div>
	)
}

const containerStyle = css`
 
`
