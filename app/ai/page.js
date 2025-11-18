'use client'

import { getProjectsByCategory } from '@/data/projects'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function AIPage() {
  const aiProjects = getProjectsByCategory('ai')

  return (
    <main className="container" style={{ paddingTop: 'calc(2rem + 60px)', paddingBottom: '2rem' }}>
      <h1 className="col-8" style={{
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: 'var(--color-dark-900)',
      }}>
        AI Projects
      </h1>

      <div className="col-8">
        {aiProjects.length > 0 ? (
          aiProjects.map((project) => {
            // Use full-width format for Littleseconds (id: 3)
            if (project.id === 3) {
              return (
                <ScrollAnimation key={project.id} delay={project.id * 50}>
                  <section className="project-showcase-full container" style={{ padding: 0 }}>
                    <div className="showcase-full-item col-8">
                      <div className="showcase-full-image-container">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="showcase-full-image"
                        />
                      </div>
                      <div className="showcase-full-content">
                        <h3 className="showcase-full-title">{project.title}</h3>
                        <p className="showcase-full-status">{project.status}</p>
                        <p className="showcase-full-description">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </section>
                </ScrollAnimation>
              )
            }
            
            // Regular showcase format for other projects
            return (
              <ScrollAnimation key={project.id} delay={project.id * 50}>
                <div className="showcase-item" style={{ marginBottom: 'var(--grid-gutter)' }}>
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
            )
          })
        ) : (
          <p className="col-8" style={{ color: 'var(--color-dark-500)' }}>
            No AI projects available yet.
          </p>
        )}
      </div>
    </main>
  )
}

