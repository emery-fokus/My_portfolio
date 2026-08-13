import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectBySlug, projects } from '../data/projects'
import CategoryBadge from '../components/CategoryBadge'
import ProjectCard from '../components/ProjectCard'

export default function ProjectDetail() {
  const { slug = '' } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link to="/" className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline">
        ← Retour aux projets
      </Link>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CategoryBadge category={project.category} />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{project.title}</h1>
          <p className="mt-3 text-lg text-slate-600">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Code source
              </a>
            )}
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
              >
                Voir le projet
              </a>
            )}
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-slate-900">Description du projet</h2>
            <div className="mt-3 space-y-3 whitespace-pre-line text-slate-600">{project.description}</div>
          </div>

          {project.images.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-semibold text-slate-900">Captures d'écran</h2>
              <div className="mt-4 space-y-4">
                {project.images.map((image, i) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Aperçu ${i + 1} du projet ${project.title}`}
                    className="w-full rounded-xl shadow-sm ring-1 ring-slate-200"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-20 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-sm font-semibold text-slate-900">Technologies utilisées</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                  {tool}
                </span>
              ))}
            </div>

            <h3 className="mt-6 text-sm font-semibold text-slate-900">Résultats clés</h3>
            <ul className="mt-3 space-y-2">
              {project.keyResults.map((result) => (
                <li key={result} className="flex items-start gap-2 text-sm text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.3 7.3a1 1 0 0 1-1.4 0l-3.3-3.3a1 1 0 1 1 1.4-1.4l2.6 2.6 6.6-6.6a1 1 0 0 1 1.4 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {relatedProjects.length > 0 && (
        <div className="mt-16 border-t border-slate-200 pt-10">
          <h2 className="mb-6 text-xl font-semibold text-slate-900">Projets similaires</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((related, index) => (
              <ProjectCard key={related.slug} project={related} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
