import { useState, useCallback, useEffect } from 'react'

function parseExplanation(explanation) {
  if (!explanation) return []
  return explanation.split('|').map((s) => s.trim()).filter(Boolean)
}

export default function QuizScreen({ cert, questions, initialIndex = 0, initialAnswers, onFinish, onProgress, onQuit }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [selected, setSelected] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [answers, setAnswers] = useState(initialAnswers ?? new Array(questions.length).fill(null))

  useEffect(() => {
    onProgress?.(currentIndex, answers)
  }, [currentIndex, answers, onProgress])

  const q = questions[currentIndex]
  const isMulti = q.answers.length > 1
  const total = questions.length

  const toggleOption = useCallback((letter) => {
    if (submitted) return
    setSelected((prev) => {
      if (isMulti) {
        return prev.includes(letter)
          ? prev.filter((l) => l !== letter)
          : [...prev, letter]
      }
      return prev.includes(letter) ? [] : [letter]
    })
  }, [submitted, isMulti])

  const handleSubmit = () => {
    if (selected.length === 0) return
    const newAnswers = [...answers]
    newAnswers[currentIndex] = [...selected]
    setAnswers(newAnswers)
    setSubmitted(true)
  }

  const handleChangeAnswer = () => {
    setSubmitted(false)
  }

  const goToQuestion = (index) => {
    setCurrentIndex(index)
    const existing = answers[index]
    setSelected(existing ? [...existing] : [])
    setSubmitted(!!existing)
  }

  const handleNext = () => {
    if (currentIndex < total - 1) {
      goToQuestion(currentIndex + 1)
    } else {
      onFinish(answers)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      goToQuestion(currentIndex - 1)
    }
  }

  const handleQuit = () => {
    if (window.confirm('Are you sure you want to quit? Your progress will be lost.')) {
      onQuit()
    }
  }

  const isCorrectAnswer = (letter) => q.answers.includes(letter)
  const isSelected = (letter) => selected.includes(letter)

  const getOptionStyle = (letter) => {
    if (!submitted) {
      return isSelected(letter)
        ? 'border-sf-cloud bg-sf-blue/20 ring-2 ring-sf-cloud'
        : 'border-gray-600 bg-surface-light hover:border-gray-400'
    }
    if (isCorrectAnswer(letter)) {
      return 'border-correct bg-correct/15 ring-2 ring-correct'
    }
    if (isSelected(letter) && !isCorrectAnswer(letter)) {
      return 'border-wrong bg-wrong/15 ring-2 ring-wrong'
    }
    return 'border-gray-700 bg-surface-light opacity-60'
  }

  const explanationLines = parseExplanation(q.explanation)

  const progress = ((currentIndex + 1) / total) * 100

  return (
    <div className="min-h-screen flex flex-col">
      {/* Progress bar */}
      <div className="sticky top-0 z-10 bg-bg/80 backdrop-blur-sm border-b border-gray-800">
        <div className="h-1 bg-gray-800">
          <div
            className="h-full bg-sf-cloud transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-400">
              Question {currentIndex + 1} / {total}
            </span>
            <span className="text-xs text-gray-500">
              {cert} Practice
            </span>
          </div>
          <button
            onClick={handleQuit}
            className="shrink-0 text-xs font-semibold text-white bg-wrong hover:bg-wrong/85
                       px-3 py-2 rounded-lg transition-all duration-200 active:scale-[0.98]"
          >
            Quit Quiz
          </button>
        </div>
      </div>

      {/* Question content */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-8 space-y-6">
        <h2 className="text-xl font-semibold leading-relaxed">
          {q.question}
        </h2>

        <p className="text-sm text-gray-400">
          Select {q.answers.length} answer{q.answers.length > 1 ? 's' : ''}
        </p>

        <div className="space-y-3">
          {q.options.map((opt) => (
            <button
              key={opt.letter}
              onClick={() => toggleOption(opt.letter)}
              disabled={submitted}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 ${getOptionStyle(opt.letter)}`}
            >
              <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                ${submitted && isCorrectAnswer(opt.letter) ? 'bg-correct text-white' :
                  submitted && isSelected(opt.letter) && !isCorrectAnswer(opt.letter) ? 'bg-wrong text-white' :
                  isSelected(opt.letter) ? 'bg-sf-cloud text-white' :
                  'bg-gray-700 text-gray-300'}`}>
                {submitted && isCorrectAnswer(opt.letter) ? '✓' :
                 submitted && isSelected(opt.letter) && !isCorrectAnswer(opt.letter) ? '✗' :
                 opt.letter}
              </span>
              <span className="pt-1">{opt.text}</span>
            </button>
          ))}
        </div>

        {/* Explanation */}
        {submitted && (
          <div className="mt-6 bg-surface rounded-xl border border-gray-700 p-5 space-y-3 animate-fade-in">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              Explanation
            </h3>
            <div className="space-y-2">
              {explanationLines.map((line, i) => {
                const isCorrect = line.includes('✅')
                return (
                  <p
                    key={i}
                    className={`text-sm leading-relaxed pl-2 border-l-2 ${
                      isCorrect ? 'border-correct text-gray-200' : 'border-gray-700 text-gray-400'
                    }`}
                  >
                    {line}
                  </p>
                )
              })}
            </div>
            <button
              onClick={handleChangeAnswer}
              className="text-xs text-gray-400 hover:text-sf-cloud underline underline-offset-2 transition-colors"
            >
              Change answer
            </button>
          </div>
        )}

        {/* Action buttons */}
        <div className="pt-4 flex gap-3">
          {currentIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="shrink-0 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white
                         font-semibold py-3 px-6 rounded-lg transition-all duration-200 active:scale-[0.98]"
            >
              Previous
            </button>
          )}
          <div className="flex-1">
            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={selected.length === 0}
                className="w-full bg-sf-blue hover:bg-sf-cloud disabled:bg-gray-700 disabled:text-gray-500
                           text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200
                           active:scale-[0.98] disabled:active:scale-100"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="w-full bg-sf-blue hover:bg-sf-cloud text-white font-semibold py-3 px-6 rounded-lg
                           transition-all duration-200 active:scale-[0.98]"
              >
                {currentIndex < total - 1 ? 'Next Question' : 'See Results'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
