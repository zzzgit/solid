/* @jsxImportSource solid-js */
import { createSignal } from 'solid-js';

export default function Home() {
  const [count, setCount] = createSignal(0);
  
  return (
    <div>
      <h1 style={{ color: '#1e293b', marginBottom: '20px' }}>歡迎來到首頁</h1>
      <div style={{
        backgroundColor: '#f1f5f9',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <p style={{ marginBottom: '16px' }}>這是一個使用 Solid.js 構建的示例應用。</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span>計數器: {count()}</span>
          <button 
            onClick={() => setCount(c => c + 1)}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            增加
          </button>
        </div>
      </div>
      <div style={{ color: '#64748b' }}>
        <h3>特色功能:</h3>
        <ul>
          <li>響應式設計</li>
          <li>快速導航</li>
          <li>現代化界面</li>
        </ul>
      </div>
    </div>
  );
}