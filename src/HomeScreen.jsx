import { useState, useEffect } from 'react'

const CERTS = [
  { id: 'ADM-201', label: 'ADM-201', subtitle: 'Salesforce Administrator Certification' },
  { id: 'App Builder', label: 'App Builder', subtitle: 'Salesforce Certified App Builder' },
]

export default function HomeScreen({ cert, onSelectCert, maxQuestions, onStart }) {
  const min = 5
  const max = maxQuestions
  const [count, setCount] = useState(Math.min(20, max))

  useEffect(() => {
    setCount(Math.min(20, max))
  }, [max])

  const handleChange = (e) => {
    const val = e.target.value
    if (val === '') {
      setCount('')
      return
    }
    const num = parseInt(val, 10)
    if (!isNaN(num)) setCount(num)
  }

  const handleStart = () => {
    const clamped = Math.max(min, Math.min(max, Number(count) || min))
    onStart(clamped)
  }

  const activeCert = CERTS.find((c) => c.id === cert) ?? CERTS[0]

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md text-center space-y-8">
        <div className="flex justify-center gap-2">
          {CERTS.map((c) => (
            <button
              key={c.id}
              onClick={() => onSelectCert(c.id)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                c.id === cert
                  ? 'bg-sf-blue text-white'
                  : 'bg-surface text-gray-400 hover:text-gray-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <div className="text-5xl font-bold text-sf-cloud">☁</div>
          <h1 className="text-3xl font-bold tracking-tight">
            {activeCert.label} Practice Quiz
          </h1>
          <p className="text-gray-400">
            {activeCert.subtitle}
          </p>
        </div>

        <div className="bg-surface rounded-2xl p-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="questionCount" className="block text-sm font-medium text-gray-300">
              Number of questions
            </label>
            <input
              id="questionCount"
              type="number"
              min={min}
              max={max}
              value={count}
              onChange={handleChange}
              onKeyDown={(e) => e.key === 'Enter' && handleStart()}
              className="w-full bg-surface-light border border-gray-600 rounded-lg px-4 py-3 text-center text-xl font-semibold
                         focus:outline-none focus:ring-2 focus:ring-sf-cloud focus:border-transparent transition-all"
            />
            <p className="text-xs text-gray-500">
              {min}–{max} questions available
            </p>
          </div>

          <button
            onClick={handleStart}
            className="w-full bg-sf-blue hover:bg-sf-cloud text-white font-semibold py-3 px-6 rounded-lg
                       transition-all duration-200 active:scale-[0.98]"
          >
            Start Quiz
          </button>
        </div>

        <p className="text-xs text-gray-600">
          Questions are randomly selected from a pool of {maxQuestions}
        </p>
      </div>
    </div>
  )
}
