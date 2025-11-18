import { getProjectsByCategory } from '@/data/projects'

export default function DesignSystemPage() {
  const designSystemProjects = getProjectsByCategory('design-system')

  return (
    <main className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <h1 className="col-8" style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: 'var(--color-dark-900)',
      }}>
        Design System
      </h1>

      <div className="col-8" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 'var(--grid-gutter)',
      }}>
        {designSystemProjects.length > 0 ? (
          designSystemProjects.map((project) => (
            <div
              key={project.id}
              style={{
                border: '1px solid var(--color-light-200)',
                borderRadius: '8px',
                padding: '1.5rem',
                backgroundColor: 'var(--color-light-0)',
              }}
            >
              <h2 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: 'var(--color-dark-900)',
              }}>
                {project.title}
              </h2>
              <p style={{
                color: 'var(--color-dark-700)',
                marginBottom: '1rem',
              }}>
                {project.description}
              </p>
              <a
                href={project.link}
                style={{
                  color: 'var(--color-dark-900)',
                  textDecoration: 'underline',
                }}
              >
                View Project →
              </a>
            </div>
          ))
        ) : (
          <p style={{ color: 'var(--color-dark-500)' }}>
            No design system projects available yet.
          </p>
        )}
      </div>
    </main>
  )
}

