import { useState, useEffect } from 'react'

const CERTS = [
  { id: 'ADM-201', label: 'ADM-201', subtitle: 'Salesforce Administrator Certification' },
  { id: 'App Builder', label: 'App Builder', subtitle: 'Salesforce Certified App Builder' },
]

export default function HomeScreen({ cert, onSelectCert, maxQuestions, onStart }) {
  const min = 5
  const max = maxQuestions
  const [count, setCount] = useState(Math.min(20, max))
  const [mode, setMode] = useState('random') // 'random' or 'range'
  const [rangeStart, setRangeStart] = useState(1)
  const [rangeEnd, setRangeEnd] = useState(Math.min(10, max))

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
    if (mode === 'random') {
      const clamped = Math.max(min, Math.min(max, Number(count) || min))
      onStart(clamped)
      return
    }
    // range mode
    let from = Number(rangeStart) || 1
    let to = Number(rangeEnd) || Math.min(10, max)
    if (from < 1) from = 1
    if (to > max) to = max
    if (from > to) [from, to] = [to, from]
    onStart({ from, to })
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
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                onClick={() => setMode('random')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${mode === 'random' ? 'bg-sf-blue text-white' : 'bg-surface text-gray-400 hover:text-gray-200'}`}
              >
                Random questions
              </button>
              <button
                type="button"
                onClick={() => setMode('range')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${mode === 'range' ? 'bg-sf-blue text-white' : 'bg-surface text-gray-400 hover:text-gray-200'}`}
              >
                Specific range
              </button>
            </div>

            {mode === 'random' ? (
              <>
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
              </>
            ) : (
              <>
                <label className="block text-sm font-medium text-gray-300">Choose question range (1-based)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min={1}
                    max={max}
                    value={rangeStart}
                    onChange={(e) => setRangeStart(e.target.value === '' ? '' : Number(e.target.value))}
                    className="w-1/2 bg-surface-light border border-gray-600 rounded-lg px-3 py-2 text-center"
                  />
                  <input
                    type="number"
                    min={1}
                    max={max}
                    value={rangeEnd}
                    onChange={(e) => setRangeEnd(e.target.value === '' ? '' : Number(e.target.value))}
                    onKeyDown={(e) => e.key === 'Enter' && handleStart()}
                    className="w-1/2 bg-surface-light border border-gray-600 rounded-lg px-3 py-2 text-center"
                  />
                </div>
                <p className="text-xs text-gray-500">Enter start and end question numbers (e.g. 1–10)</p>
              </>
            )}

            <button
              onClick={handleStart}
              className="w-full bg-sf-blue hover:bg-sf-cloud text-white font-semibold py-3 px-6 rounded-lg
                         transition-all duration-200 active:scale-[0.98]"
            >
              Start Quiz
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-600">
          Questions are randomly selected from a pool of {maxQuestions}
        </p>
      </div>
    </div>
  )
}
