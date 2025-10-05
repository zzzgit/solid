/* @jsxImportSource solid-js */
import { createSignal } from 'solid-js';

export default function Contact() {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [message, setMessage] = createSignal('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`感謝您的留言，${name()}！我們會盡快回復您。`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1 style={{ color: '#1e293b', marginBottom: '20px' }}>聯繫我們</h1>
      <div style={{ display: 'grid', gap: '20px', maxWidth: '500px' }}>
        <div style={{
          backgroundColor: '#f1f5f9',
          padding: '20px',
          borderRadius: '8px'
        }}>
          <p style={{ margin: '0 0 16px 0', color: '#64748b' }}>
            有任何問題或建議，請隨時聯繫我們。
          </p>
          <div style={{ color: '#64748b' }}>
            <p>📧 Email: info@example.com</p>
            <p>📞 電話: +86 123 4567 8901</p>
            <p>📍 地址: 台灣台北市信義區</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#374151' }}>
              姓名:
            </label>
            <input
              type="text"
              value={name()}
              onInput={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px'
              }}
              required
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#374151' }}>
              Email:
            </label>
            <input
              type="email"
              value={email()}
              onInput={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px'
              }}
              required
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '4px', color: '#374151' }}>
              留言:
            </label>
            <textarea
              value={message()}
              onInput={(e) => setMessage(e.target.value)}
              rows="4"
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px',
                resize: 'vertical'
              }}
              required
            />
          </div>
          
          <button
            type="submit"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            發送留言
          </button>
        </form>
      </div>
    </div>
  );
}