function App() {
  return (
    <div style={{ padding: 'var(--space-2xl)', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>SQLWhisper Design System</h1>
      <p className="text-secondary">Warm neutral + muted green palette</p>

      <div style={{ marginTop: 'var(--space-xl)' }}>
        <h2>Color Palette</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
          <div className="card">
            <div style={{ 
              width: '100%', 
              height: '60px', 
              backgroundColor: 'var(--color-background)', 
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              marginBottom: 'var(--space-sm)'
            }}></div>
            <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>Background #F7F6F2</p>
          </div>
          <div className="card">
            <div style={{ 
              width: '100%', 
              height: '60px', 
              backgroundColor: 'var(--color-surface)', 
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              marginBottom: 'var(--space-sm)'
            }}></div>
            <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>Surface #FFFFFF</p>
          </div>
          <div className="card">
            <div style={{ 
              width: '100%', 
              height: '60px', 
              backgroundColor: 'var(--color-primary)', 
              borderRadius: 'var(--radius-sm)',
              marginBottom: 'var(--space-sm)'
            }}></div>
            <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>Primary #30483B</p>
          </div>
          <div className="card">
            <div style={{ 
              width: '100%', 
              height: '60px', 
              backgroundColor: 'var(--color-accent)', 
              borderRadius: 'var(--radius-sm)',
              marginBottom: 'var(--space-sm)'
            }}></div>
            <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>Accent #B78B5A</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'var(--space-xl)' }}>
        <h2>Typography</h2>
        <div className="card">
          <h1>Heading 1 - 32px Bold</h1>
          <h2>Heading 2 - 24px Semibold</h2>
          <h3>Heading 3 - 20px Semibold</h3>
          <h4>Heading 4 - 18px Semibold</h4>
          <p>Body text - 16px Normal with 1.5 line height for readability.</p>
          <p className="text-secondary">Secondary text - for supporting information and captions.</p>
          <p className="text-success">Success state - for positive feedback.</p>
          <p className="text-warning">Warning state - for caution messages.</p>
          <p className="text-error">Error state - for negative feedback.</p>
          <code>Inline code - for technical references</code>
        </div>
      </div>

      <div style={{ marginTop: 'var(--space-xl)' }}>
        <h2>Buttons</h2>
        <div className="card">
          <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', marginBottom: 'var(--space-md)' }}>
            <button className="btn btn-primary">Primary Button</button>
            <button className="btn btn-secondary">Secondary Button</button>
            <button className="btn btn-accent">Accent Button</button>
            <button className="btn btn-ghost">Ghost Button</button>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-sm">Small Primary</button>
            <button className="btn btn-secondary btn-sm">Small Secondary</button>
            <button className="btn btn-primary btn-lg">Large Primary</button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'var(--space-xl)' }}>
        <h2>Form Elements</h2>
        <div className="card">
          <div style={{ marginBottom: 'var(--space-md)' }}>
            <label style={{ display: 'block', marginBottom: 'var(--space-xs)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
              Text Input
            </label>
            <input type="text" placeholder="Enter text..." style={{ width: '100%' }} />
          </div>
          <div style={{ marginBottom: 'var(--space-md)' }}>
            <label style={{ display: 'block', marginBottom: 'var(--space-xs)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
              Textarea
            </label>
            <textarea placeholder="Enter multiple lines..." rows={3} style={{ width: '100%', resize: 'vertical' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: 'var(--space-xs)', fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-medium)' }}>
              Select
            </label>
            <select style={{ width: '100%' }}>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'var(--space-xl)' }}>
        <h2>Cards & Components</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-md)' }}>
          <div className="card">
            <div className="card-header">
              <h3 style={{ margin: 0 }}>Card Header</h3>
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)' }}>Card content with subtle shadow and minimal border radius.</p>
            <button className="btn btn-primary btn-sm">Action</button>
          </div>
          <div className="card card-elevated">
            <div className="card-header">
              <h3 style={{ margin: 0 }}>Elevated Card</h3>
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)' }}>Card with enhanced shadow for emphasis.</p>
            <button className="btn btn-secondary btn-sm">Action</button>
          </div>
          <div className="card card-interactive">
            <div className="card-header">
              <h3 style={{ margin: 0 }}>Interactive Card</h3>
            </div>
            <p style={{ fontSize: 'var(--font-size-sm)' }}>Card with hover effect and cursor pointer.</p>
            <button className="btn btn-ghost btn-sm">Action</button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'var(--space-xl)' }}>
        <h2>Badges & Tags</h2>
        <div className="card">
          <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap', marginBottom: 'var(--space-md)' }}>
            <span className="badge">Default Badge</span>
            <span className="badge badge-success">Success</span>
            <span className="badge badge-warning">Warning</span>
            <span className="badge badge-error">Error</span>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
            <span className="tag">Tag</span>
            <span className="tag tag-removable">Removable Tag ×</span>
            <span className="tag">Another Tag</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'var(--space-xl)' }}>
        <h2>Status Indicators</h2>
        <div className="card">
          <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <span className="status-dot status-dot-success"></span>
              <span style={{ fontSize: 'var(--font-size-sm)' }}>Connected</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <span className="status-dot status-dot-warning"></span>
              <span style={{ fontSize: 'var(--font-size-sm)' }}>Pending</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <span className="status-dot status-dot-error"></span>
              <span style={{ fontSize: 'var(--font-size-sm)' }}>Disconnected</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'var(--space-xl)' }}>
        <h2>Avatars</h2>
        <div className="card">
          <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
            <div className="avatar avatar-sm">AB</div>
            <div className="avatar">JD</div>
            <div className="avatar avatar-lg">XY</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'var(--space-xl)' }}>
        <h2>Visual Character</h2>
        <div className="card">
          <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-md)' }}>
            <strong>Design Philosophy:</strong> Calm + professional + minimal + slightly warm
          </p>
          <ul style={{ fontSize: 'var(--font-size-sm)', paddingLeft: 'var(--space-lg)', marginBottom: 0 }}>
            <li>Warm off-white background (#F7F6F2) instead of stark white</li>
            <li>Deep muted green (#30483B) as primary - not "AI blue"</li>
            <li>Muted warm brown (#B78B5A) for accents</li>
            <li>Soft beige-gray borders (#E3E1DA)</li>
            <li>Minimal border radius (4-12px)</li>
            <li>Subtle shadows, no glowing effects</li>
            <li>Dark charcoal text for readability</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App