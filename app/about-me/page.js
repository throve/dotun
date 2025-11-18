export default function AboutMePage() {
  return (
    <main className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <h1 className="col-8" style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: 'var(--color-dark-900)',
      }}>
        About Me
      </h1>

      <div className="col-8" style={{
        fontSize: '1.125rem',
        lineHeight: '1.8',
        color: 'var(--color-dark-700)',
      }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Add your about me content here.
        </p>
      </div>
    </main>
  )
}

