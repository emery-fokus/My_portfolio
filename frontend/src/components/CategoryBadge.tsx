import type { Category } from '../data/projects'
import { CATEGORY_LABELS } from '../data/projects'

const CATEGORY_STYLES: Record<Category, string> = {
  PBI: 'bg-amber-400 text-amber-950',
  PY: 'bg-blue-600 text-white',
  WEB: 'bg-emerald-800 text-white',
}

export default function CategoryBadge({ category }: { category: Category }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${CATEGORY_STYLES[category]}`}
    >
      {CATEGORY_LABELS[category]}
    </span>
  )
}
