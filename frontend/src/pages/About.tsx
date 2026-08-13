import { Link } from 'react-router-dom'

const skillGroups = [
  {
    title: 'Visualisation & BI',
    skills: ['Power BI & DAX', 'Tableau', 'Excel avancé'],
    color: 'bg-indigo-600',
  },
  {
    title: 'Développement',
    skills: ['Python (Pandas, NumPy)', 'Django & Flask', 'SQL'],
    color: 'bg-emerald-600',
  },
]

const keyProjects = [
  { title: 'Performance livreurs', subtitle: 'Analyse KPI avec Power BI', to: '/projets/performance-livreur' },
  { title: 'E-commerce musical', subtitle: 'Analyse ventes multi-villes', to: '/projets/analyse-des-ventes-des-instruments-de-musique' },
  { title: 'StoryMind', subtitle: 'Application Python générative', to: '/projets/generateur-dhistoires-multimedia-mistral-grok' },
  { title: 'Analyse des avis Amazon', subtitle: 'Data cleaning et visualisation', to: '/projets/analyse-des-avis-amazon-data-analyst' },
  { title: 'ARKOSE', subtitle: 'Analyse exploratoire', to: '/projets/arkose' },
]

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="mb-14 text-center">
        <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-3xl font-bold text-white shadow-lg">
          EP
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">À propos de moi</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Étudiante passionnée par l'analyse de données et la découverte d'insights. En formation sur Python, Power
          BI et développement web avec Django.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">Compétences techniques</h2>
          <div className="mt-6 space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-sm font-medium text-slate-500">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium text-white ${group.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">Mes projets clés</h2>
          <div className="mt-4 divide-y divide-slate-100">
            {keyProjects.map((project) => (
              <Link
                key={project.title}
                to={project.to}
                className="flex items-center justify-between gap-3 py-3 transition-colors hover:text-indigo-600"
              >
                <div>
                  <p className="font-medium text-slate-900">{project.title}</p>
                  <p className="text-sm text-slate-500">{project.subtitle}</p>
                </div>
                <span aria-hidden className="text-slate-400">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-10 text-center text-white shadow-lg">
        <h2 className="text-2xl font-semibold">Intéressé par mon profil ?</h2>
        <p className="mx-auto mt-2 max-w-xl text-indigo-100">
          N'hésitez pas à me contacter pour discuter de vos projets data.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition-transform hover:scale-105"
        >
          Me contacter
        </Link>
      </div>
    </div>
  )
}
