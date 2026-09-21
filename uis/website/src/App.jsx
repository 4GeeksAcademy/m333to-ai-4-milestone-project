import './styles.css';
import Brand from './components/Brand';
import SectionHeader from './components/SectionHeader';

const stats = [
  { label: 'Shipments monitored', value: '2.4M+' },
  { label: 'Avg. delivery visibility', value: '99.2%' },
  { label: 'Operational uptime', value: '24/7' }
];

const capabilities = [
  {
    title: 'Warehouse to doorstep visibility',
    description: 'Track every handoff across inbound, transit, regional hubs, and final-mile delivery.'
  },
  {
    title: 'Exception intelligence',
    description: 'Identify delays, inventory mismatches, and route disruptions before they trigger customer escalations.'
  },
  {
    title: 'Multilingual operations',
    description: 'Support teams across local markets with shared operational context and service workflows.'
  }
];

const features = [
  'Live shipment event monitoring',
  'Cross-region fulfillment coordination',
  'AI-assisted customer support workflows',
  'Operational dashboards for logistics teams'
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <Brand />
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#solutions">Solutions</a>
          <a href="#platform">Platform</a>
          <a href="#impact">Impact</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="nav-cta">Book a demo</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Logistics intelligence for every mile</p>
            <h1>Keep every parcel moving with complete operational visibility.</h1>
            <p className="lede">
              TrackFlow brings warehouse movement, transit status, regional transfers, and final-mile delivery into one operating view.
            </p>
            <div className="hero-actions">
              <button className="primary-btn">Request a consultation</button>
              <button className="secondary-btn">Explore the platform</button>
            </div>
          </div>

          <div className="hero-panel" aria-label="TrackFlow operations summary">
            <div className="panel-header">
              <span className="status-dot" />
              Live operations overview
            </div>
            <div className="shipment-card">
              <p>Shipment status</p>
              <strong>In transit</strong>
              <span>From Los Angeles hub to regional distribution center</span>
            </div>
            <ul className="mini-list">
              <li><span>Route health</span><strong>Stable</strong></li>
              <li><span>Exceptions</span><strong>3 flagged</strong></li>
              <li><span>ETA accuracy</span><strong>96.8%</strong></li>
            </ul>
          </div>
        </section>

        <section className="stats" id="impact">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-box">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="solutions" id="solutions">
          <SectionHeader
            eyebrow="Built for modern fulfillment"
            title="From first warehouse scan to final doorstep delivery."
          />
          <div className="card-grid">
            {capabilities.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="platform" id="platform">
          <div className="platform-copy">
            <p className="eyebrow">Operational clarity</p>
            <h2>One system for logistics teams, customer support, and service intelligence.</h2>
            <p>
              TrackFlow is designed for the reality of a 24/7 delivery operation where speed, service quality, and transparency matter at every stage.
            </p>
          </div>
          <div className="feature-panel">
            <ul>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <Brand compact />
        </div>
        <p>Operations visibility for the moments that matter most.</p>
      </footer>
    </div>
  );
}

export default App;
