import type { Category } from '../data/projects'
import { CATEGORY_LABELS } from '../data/projects'

const CATEGORY_STYLES: Record<Category, string> = {
  PBI: 'bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/30 shadow-[0_0_16px_-4px_rgba(251,191,36,0.5)]',
  PY: 'bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/30 shadow-[0_0_16px_-4px_rgba(34,211,238,0.5)]',
  WEB: 'bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/30 shadow-[0_0_16px_-4px_rgba(52,211,153,0.5)]',
}

export default function CategoryBadge({ category }: { category: Category }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-medium tracking-wide backdrop-blur ${CATEGORY_STYLES[category]}`}
    >
      {CATEGORY_LABELS[category]}
    </span>
  )
}
