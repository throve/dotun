'use client'

import { getProjectsByCategory } from '@/data/projects'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function HealthPage() {
  const healthProjects = getProjectsByCategory('health')

  return (
    <main className="container" style={{ paddingTop: 'calc(2rem + 60px)', paddingBottom: '2rem' }}>
      <h1 className="col-8" style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: 'var(--color-dark-900)',
      }}>
        Health Projects
      </h1>

      <div className="showcase-container col-8">
        {healthProjects.length > 0 ? (
          healthProjects.map((project) => (
            <ScrollAnimation key={project.id} delay={project.id * 50}>
              <div className="showcase-item">
                <div className="showcase-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="showcase-image"
                  />
                </div>
                <div className="showcase-content">
                  <h3 className="showcase-title">{project.title}</h3>
                  <p className="showcase-status">{project.status}</p>
                  <p className="showcase-description">
                    {project.description}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))
        ) : (
          <p className="col-8" style={{ color: 'var(--color-dark-500)' }}>
            No health projects available yet.
          </p>
        )}
      </div>
    </main>
  )
}

