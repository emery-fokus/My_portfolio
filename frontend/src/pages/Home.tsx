import { useMemo, useState } from 'react'
import { CATEGORY_LABELS, projects, type Category } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const FILTERS: Array<{ value: Category | 'ALL'; label: string }> = [
  { value: 'ALL', label: 'Tous' },
  { value: 'PBI', label: CATEGORY_LABELS.PBI },
  { value: 'PY', label: CATEGORY_LABELS.PY },
]

const stats = [
  { value: `${projects.length}`, label: 'Projets réalisés' },
  { value: '2', label: 'Domaines : BI & Python' },
  { value: '100%', label: 'Analyses orientées décision' },
]

export default function Home() {
  const [filter, setFilter] = useState<Category | 'ALL'>('ALL')

  const filteredProjects = useMemo(
    () => (filter === 'ALL' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <div>
      <section className="bg-mesh relative overflow-hidden border-b border-white/10">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div
          className="animate-blob pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl"
          aria-hidden
        />
        <div
          className="animate-blob pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
          style={{ animationDelay: '4s' }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-violet-300 backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Data Analyst en formation
          </div>

          <h1 className="mx-auto max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Je transforme des <span className="text-gradient">données brutes</span> en décisions claires
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Explorez mes réalisations en analyse de données, visualisation Power BI et développement Python.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projets"
              className="rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-[#06070d] shadow-[0_0_30px_-8px_rgba(139,92,246,0.8)] transition-transform hover:scale-105"
            >
              Voir mes projets
            </a>
            <a
              href="mailto:fokwangemery@icloud.com"
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition-colors hover:bg-white/5"
            >
              Me contacter
            </a>
            <a
              href="/CV_Emery_Fokwang.pdf"
              download
              className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur transition-colors hover:bg-white/5"
            >
              Télécharger mon CV
            </a>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projets" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-violet-400">Portfolio</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Mes projets</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === f.value
                    ? 'bg-gradient-to-r from-violet-500 to-cyan-400 text-[#06070d]'
                    : 'border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
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
