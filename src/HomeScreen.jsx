import { useState } from 'react'

export default function HomeScreen({ maxQuestions, onStart }) {
  const min = 5
  const max = Math.min(150, maxQuestions)
  const [count, setCount] = useState(Math.min(20, max))

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

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md text-center space-y-8">
        <div className="space-y-2">
          <div className="text-5xl font-bold text-sf-cloud">☁</div>
          <h1 className="text-3xl font-bold tracking-tight">
            ADM-201 Practice Quiz
          </h1>
          <p className="text-gray-400">
            Salesforce Administrator Certification
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
