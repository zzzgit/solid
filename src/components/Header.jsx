/* @jsxImportSource solid-js */

export default function Header() {
  return (
    <header style={{
      height: '60px',
      backgroundColor: '#2563eb',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        🚀 My Solid App
      </div>
    </header>
  );
}