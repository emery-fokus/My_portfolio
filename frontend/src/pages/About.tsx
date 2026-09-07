import { Link } from 'react-router-dom'

const skillGroups = [
  {
    title: 'Visualisation & BI',
    skills: ['Power BI & DAX', 'Tableau', 'Excel avancé'],
    color: 'from-amber-400 to-orange-400',
  },
  {
    title: 'Développement',
    skills: ['Python (Pandas, NumPy)', 'SQL'],
    color: 'from-cyan-400 to-emerald-400',
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
    <div className="bg-mesh relative">
      <div className="bg-grid pointer-events-none absolute inset-0 h-[420px]" />

      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="mb-14 text-center">
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 font-mono text-3xl font-bold text-[#06070d] shadow-[0_0_50px_-10px_rgba(139,92,246,0.7)]">
            EP
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white">À propos de moi</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Étudiant passionné par l'analyse de données et la découverte d'insights. En formation sur Python
            et Power BI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white">Compétences techniques</h2>
            <div className="mt-6 space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-slate-500">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-full bg-gradient-to-r px-3 py-1.5 text-xs font-medium text-[#06070d] ${group.color}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-white">Mes projets clés</h2>
            <div className="mt-4 divide-y divide-white/10">
              {keyProjects.map((project) => (
                <Link
                  key={project.title}
                  to={project.to}
                  className="group flex items-center justify-between gap-3 py-3 transition-colors"
                >
                  <div>
                    <p className="font-medium text-slate-200 group-hover:text-white">{project.title}</p>
                    <p className="text-sm text-slate-500">{project.subtitle}</p>
                  </div>
                  <span aria-hidden className="text-violet-400 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/80 to-cyan-500/70 p-10 text-center shadow-[0_0_60px_-15px_rgba(139,92,246,0.6)]">
          <h2 className="text-2xl font-semibold text-white">Intéressé par mon profil ?</h2>
          <p className="mx-auto mt-2 max-w-xl text-violet-50">
            N'hésitez pas à me contacter pour discuter de vos projets data.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#06070d] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  )
}
