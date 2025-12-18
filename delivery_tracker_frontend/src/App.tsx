import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function App(): JSX.Element {
  /** Root application component with basic routes for sanity check. */
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, sans-serif', background: '#f9fafb', color: '#111827', minHeight: '100vh' }}>
      <header style={{ background: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <strong style={{ color: '#3b82f6' }}>Delivery Tracker</strong>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

function Home(): JSX.Element {
  return (
    <section>
      <h1>Welcome</h1>
      <p>This is a fresh React 18 + Vite setup. Routes provided via react-router-dom v6.</p>
    </section>
  );
}

function Dashboard(): JSX.Element {
  return (
    <section>
      <h1>Dashboard</h1>
      <p>Admin and tracking UI will be implemented here.</p>
    </section>
  );
}

function NotFound(): JSX.Element {
  return (
    <section>
      <h1>Not found</h1>
      <p>The requested page does not exist.</p>
    </section>
  );
}
