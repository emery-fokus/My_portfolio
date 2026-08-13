const contactMethods = [
  {
    label: 'Email',
    value: 'fokwangemery@icloud.com',
    href: 'mailto:fokwangemery@icloud.com',
    color: 'text-indigo-600',
    icon: (
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.4 2 7.1 5.6L18.6 7H4.4Zm-.4 1.4V17h18V8.4l-8.4 6.6a1 1 0 0 1-1.2 0L4 8.4Z" />
    ),
  },
  {
    label: 'GitHub',
    value: 'Me suivre sur GitHub',
    href: 'https://github.com/emery-fokus',
    color: 'text-slate-800',
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.61.69.5C19.14 20.6 22 16.76 22 12.25 22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Me rejoindre sur LinkedIn',
    href: 'https://linkedin.com/in/emery-patrick',
    color: 'text-blue-600',
    icon: (
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.75h3.88V21H3.5V8.75Zm6.75 0h3.72v1.68h.05c.52-.95 1.78-1.95 3.67-1.95 3.93 0 4.65 2.48 4.65 5.7V21h-3.88v-5.98c0-1.43-.03-3.27-2.02-3.27-2.02 0-2.33 1.55-2.33 3.16V21h-3.86V8.75Z" />
    ),
  },
]

export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="text-center text-4xl font-bold tracking-tight text-slate-900">Contact</h1>

      <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group flex flex-col items-center rounded-xl p-5 text-center transition-all hover:-translate-y-1 hover:bg-slate-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`h-10 w-10 transition-transform group-hover:scale-110 ${method.color}`}
              >
                {method.icon}
              </svg>
              <h2 className="mt-3 font-semibold text-slate-900">{method.label}</h2>
              <span className="mt-1 break-words text-sm text-slate-500 group-hover:text-indigo-600 group-hover:underline">
                {method.value}
              </span>
            </a>
          ))}
        </div>

        <p className="mt-8 border-t border-slate-100 pt-6 text-center text-sm text-slate-500">
          N'hésitez pas à me contacter pour discuter de projets data, collaborations ou opportunités professionnelles.
        </p>
      </div>
    </div>
  )
}
