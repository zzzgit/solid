/* @jsxImportSource solid-js */
import { Router, Route } from '@solidjs/router';
import Header from './components/Header.jsx';
import Aside from './components/Aside.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import './styles.css';

export default function App() {
  return (
    <Router
      root={(props) => (
        <div style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Header */}
          <Header />
          
          {/* 主要內容區域 */}
          <div style={{
            flex: '1',
            display: 'flex',
            overflow: 'hidden'
          }}>
            {/* Aside - 側邊導航 */}
            <Aside />
            
            {/* Main - 主要內容 */}
            <main style={{
              flex: '1',
              padding: '20px',
              backgroundColor: '#ffffff',
              overflowY: 'auto'
            }}>
              {props.children}
            </main>
          </div>
        </div>
      )}
    >
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}
