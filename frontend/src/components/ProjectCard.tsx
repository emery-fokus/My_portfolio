import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import CategoryBadge from './CategoryBadge'

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      to={`/projets/${project.slug}`}
      className="group animate-fade-in-up flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{ animationDelay: `${Math.min(index, 6) * 80}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3">
          <CategoryBadge category={project.category} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
        <p className="line-clamp-3 flex-1 text-sm text-slate-600">{project.summary}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
            >
              {tool}
            </span>
          ))}
        </div>

        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-transform group-hover:translate-x-1">
          Voir le projet
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.29 5.29a.75.75 0 111.06-1.06l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06l4.098-4.098H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </Link>
  )
}
