/* @jsxImportSource solid-js */
import { A } from "@solidjs/router";

export default function Aside() {
  const menuItems = [
    { path: "/", label: "首頁", icon: "🏠" },
    { path: "/about", label: "關於", icon: "ℹ️" },
    { path: "/services", label: "服務", icon: "🛠️" },
    { path: "/contact", label: "聯繫", icon: "📞" }
  ];

  return (
    <aside style={{
      width: '200px',
      backgroundColor: '#f8fafc',
      borderRight: '1px solid #e2e8f0',
      padding: '20px 0',
      height: '100%'
    }}>
      <nav>
        <ul style={{
          listStyle: 'none',
          margin: '0',
          padding: '0'
        }}>
          {menuItems.map((item) => (
            <li style={{ marginBottom: '8px' }}>
              <A 
                href={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 20px',
                  textDecoration: 'none',
                  color: '#64748b',
                  borderRadius: '6px',
                  margin: '0 10px',
                  transition: 'all 0.2s ease'
                }}
                activeClass="active-nav"
              >
                <span style={{ marginRight: '8px', fontSize: '16px' }}>
                  {item.icon}
                </span>
                {item.label}
              </A>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
