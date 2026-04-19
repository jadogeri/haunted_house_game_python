import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div style={styles.container}>
      {/* 1. Ambient Background/Overlay */}
      <div style={styles.overlay} />

      {/* 2. Top UI Bar (HUD) */}
      <header style={styles.hud}>
        <div>Location: <span style={styles.roomName}>{location.pathname === '/' ? 'Foyer' : location.pathname.substring(1)}</span></div>
        <div>Sanity: 100%</div>
        <div>Inventory: [ 🗝️ ]</div>
      </header>

      {/* 3. Main Game Window */}
      <main style={styles.viewport}>
        <Outlet />
      </main>

      {/* 4. Navigation Tooltip (Optional helper) */}
      <footer style={styles.footer}>
        <small>Use the doors within the room to navigate...</small>
      </footer>
    </div>
  );
};

// Simple inline styles for a spooky vibe
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#0a0a0a',
    color: '#d1d1d1',
    minHeight: '100vh',
    fontFamily: '"Courier New", Courier, monospace',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle, transparent 20%, black 150%)',
    pointerEvents: 'none',
    zIndex: 10,
  },
  hud: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    borderBottom: '1px solid #333',
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: 20,
  },
  roomName: {
    color: '#ff4444',
    textTransform: 'uppercase',
  },
  viewport: {
    flex: 1,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  footer: {
    textAlign: 'center',
    padding: '10px',
    color: '#555',
  }
};

export default Layout;
