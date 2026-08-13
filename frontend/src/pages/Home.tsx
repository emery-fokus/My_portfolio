import { useMemo, useState } from 'react'
import { CATEGORY_LABELS, projects, type Category } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const FILTERS: Array<{ value: Category | 'ALL'; label: string }> = [
  { value: 'ALL', label: 'Tous' },
  { value: 'PBI', label: CATEGORY_LABELS.PBI },
  { value: 'PY', label: CATEGORY_LABELS.PY },
]

export default function Home() {
  const [filter, setFilter] = useState<Category | 'ALL'>('ALL')

  const filteredProjects = useMemo(
    () => (filter === 'ALL' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Data Analyst en formation
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Je transforme des données brutes en décisions claires
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Explorez mes réalisations en analyse de données, visualisation Power BI et développement Python.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === f.value
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-center text-slate-500">Aucun projet dans cette catégorie pour le moment.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
