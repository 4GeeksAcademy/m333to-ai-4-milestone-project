import './styles.css';

const operations = [
  { label: 'Active hubs', value: '14', status: 'Across 3 regions' },
  { label: 'Shipment exceptions', value: '28', status: 'Needs review' },
  { label: 'Support queue', value: '96', status: '24/7 coverage' },
  { label: 'Live route health', value: '94.8%', status: 'Stable' }
];

const serviceSignals = [
  { title: 'Las Angeles hub', detail: 'Transit backlog: 12 parcels waiting for final transfer', tag: 'Warehouse' },
  { title: 'Cross-border transfer', detail: 'Spain and U.S. coordination requires bilingual escalation', tag: 'International' },
  { title: 'Customer support automation', detail: 'Voice-to-action flow active for delivery inquiries', tag: 'Support Ops' }
];

function App() {
  return (
    <div className="backoffice-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark">T</div>
          <div>
            <strong>TrackFlow</strong>
            <small>Backoffice</small>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Backoffice navigation">
          <button className="nav-item active">Overview</button>
          <button className="nav-item">Hubs</button>
          <button className="nav-item">Shipments</button>
          <button className="nav-item">Support</button>
          <button className="nav-item">Automation</button>
        </nav>
      </aside>

      <main className="content-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Operations command center</p>
            <h1>Welcome back, logistics team</h1>
          </div>
          <button className="primary-btn">Generate daily briefing</button>
        </header>

        <section className="stats-grid">
          {operations.map((item) => (
            <article key={item.label} className="stat-card">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <small>{item.status}</small>
            </article>
          ))}
        </section>

        <section className="main-grid">
          <div className="panel">
            <div className="panel-header">
              <h2>Priority operations</h2>
              <span className="badge">Live</span>
            </div>

            {serviceSignals.map((signal) => (
              <div key={signal.title} className="signal-item">
                <div className="signal-tag">{signal.tag}</div>
                <div>
                  <h3>{signal.title}</h3>
                  <p>{signal.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Flow context</h2>
            </div>
            <div className="context-box">
              <p><strong>Current logistics model:</strong> packages move from warehouse shelves to distribution centers, then across regional transit hubs and final-mile delivery points.</p>
              <p><strong>Cross-border reality:</strong> operations span Los Angeles and Spain, with bilingual coordination required for international fulfillment.</p>
              <p><strong>Support model:</strong> customer service runs 24/7 and is supported by automation for voice-driven exception handling.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
