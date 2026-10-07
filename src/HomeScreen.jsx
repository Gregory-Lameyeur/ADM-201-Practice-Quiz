import { useState, useEffect, useMemo } from 'react'

const CERTS = [
  { id: 'ADM-201', label: 'ADM-201', subtitle: 'Salesforce Administrator Certification' },
  { id: 'App Builder', label: 'App Builder', subtitle: 'Salesforce Certified App Builder' },
  { id: 'Platform Dev 1', label: 'Platform Dev 1', subtitle: 'Salesforce Certified Platform Developer I' },
]

export default function HomeScreen({ cert, onSelectCert, allQuestions, onStart }) {
  const min = 5

  const sections = useMemo(() => {
    const s = [...new Set(allQuestions.map(q => q.section).filter(Boolean))]
    return s.sort()
  }, [allQuestions])

  const hasSections = sections.length > 0

  const [selectedSections, setSelectedSections] = useState([])
  const [mode, setMode] = useState('random')
  const [rangeStart, setRangeStart] = useState(1)
  const [rangeEnd, setRangeEnd] = useState(10)
  const [count, setCount] = useState(20)

  const filteredPool = useMemo(() => {
    if (!hasSections || selectedSections.length === 0) return allQuestions
    return allQuestions.filter(q => q.section && selectedSections.includes(q.section))
  }, [allQuestions, selectedSections, hasSections])

  const max = filteredPool.length

  useEffect(() => {
    setSelectedSections([])
  }, [cert])

  useEffect(() => {
    setCount(Math.min(20, max))
    setRangeEnd(Math.min(10, max))
    setRangeStart(1)
  }, [max])

  const toggleSection = (section) => {
    setSelectedSections(prev =>
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    )
  }

  const handleChange = (e) => {
    const val = e.target.value
    if (val === '') { setCount(''); return }
    const num = parseInt(val, 10)
    if (!isNaN(num)) setCount(num)
  }

  const handleStart = () => {
    const sections = hasSections && selectedSections.length > 0 ? selectedSections : null
    if (mode === 'random') {
      const clamped = Math.max(min, Math.min(max, Number(count) || min))
      onStart(clamped, sections)
      return
    }
    let from = Number(rangeStart) || 1
    let to = Number(rangeEnd) || Math.min(10, max)
    if (from < 1) from = 1
    if (to > max) to = max
    if (from > to) [from, to] = [to, from]
    onStart({ from, to }, sections)
  }

  const activeCert = CERTS.find((c) => c.id === cert) ?? CERTS[0]

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md text-center space-y-8">
        <div className="flex justify-center gap-2 flex-wrap">
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

          {hasSections && (
            <div className="space-y-2 text-left">
              <p className="text-sm font-medium text-gray-300">Filter by topic</p>
              <div className="space-y-1">
                {sections.map(section => {
                  const sectionCount = allQuestions.filter(q => q.section === section).length
                  const checked = selectedSections.includes(section)
                  return (
                    <label
                      key={section}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                        checked ? 'bg-sf-blue/20 text-white' : 'text-gray-400 hover:text-gray-200 hover:bg-surface-light'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleSection(section)}
                        className="accent-sf-blue w-4 h-4 flex-shrink-0"
                      />
                      <span className="text-sm flex-1">{section}</span>
                      <span className="text-xs text-gray-500">{sectionCount}q</span>
                    </label>
                  )
                })}
              </div>
              {selectedSections.length > 0 && (
                <p className="text-xs text-gray-500 pt-1">
                  {max} question{max !== 1 ? 's' : ''} in selected topic{selectedSections.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>
          )}

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
          Questions are randomly selected from a pool of {allQuestions.length}
        </p>
      </div>
    </div>
  )
}
