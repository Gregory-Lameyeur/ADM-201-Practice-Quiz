import { isAnswerCorrect, computeScore } from './utils'

export default function ResultsScreen({ questions, userAnswers, onRetry, onNewQuiz }) {
  const score = computeScore(questions, userAnswers)
  const total = questions.length
  const pct = Math.round((score / total) * 100)
  const passed = pct >= 65

  return (
    <div className="min-h-screen max-w-2xl mx-auto px-4 py-8 space-y-8">
      {/* Score card */}
      <div className="text-center space-y-4 py-8">
        <div className={`text-6xl font-bold ${passed ? 'text-correct' : 'text-wrong'}`}>
          {score} / {total}
        </div>
        <div className="text-lg text-gray-400">
          {pct}% — {passed ? 'Passing score!' : 'Keep studying!'}
        </div>
        <div className="w-full bg-gray-800 rounded-full h-3 max-w-xs mx-auto">
          <div
            className={`h-full rounded-full transition-all duration-1000 ${passed ? 'bg-correct' : 'bg-wrong'}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-xs text-gray-500">Passing threshold: 65%</p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4">
        <button
          onClick={onRetry}
          className="flex-1 bg-surface border border-gray-600 hover:border-gray-400
                     text-gray-200 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
        >
          Restart from Question 1
        </button>
        <button
          onClick={onNewQuiz}
          className="flex-1 bg-sf-blue hover:bg-sf-cloud text-white font-semibold py-3 px-6 rounded-lg
                     transition-all duration-200"
        >
          New Quiz
        </button>
      </div>

      {/* Question breakdown */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-300 border-b border-gray-700 pb-2">
          Question Breakdown
        </h2>
        {questions.map((q, i) => {
          const correct = isAnswerCorrect(userAnswers[i], q.answers)
          const userAns = userAnswers[i] || []
          return (
            <div
              key={i}
              className={`bg-surface rounded-xl p-4 border-l-4 ${
                correct ? 'border-correct' : 'border-wrong'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className={`shrink-0 mt-0.5 text-lg ${correct ? 'text-correct' : 'text-wrong'}`}>
                  {correct ? '✓' : '✗'}
                </span>
                <div className="space-y-1 min-w-0">
                  <p className="text-sm font-medium text-gray-200">
                    {i + 1}. {q.question}
                  </p>
                  <p className="text-xs text-gray-400">
                    Your answer: <span className={correct ? 'text-correct' : 'text-wrong'}>
                      {userAns.join(', ') || 'No answer'}
                    </span>
                    {' · '}
                    Correct: <span className="text-correct">{q.answers.join(', ')}</span>
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom action buttons */}
      <div className="flex gap-4 pb-8">
        <button
          onClick={onRetry}
          className="flex-1 bg-surface border border-gray-600 hover:border-gray-400
                     text-gray-200 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
        >
          Restart from Question 1
        </button>
        <button
          onClick={onNewQuiz}
          className="flex-1 bg-sf-blue hover:bg-sf-cloud text-white font-semibold py-3 px-6 rounded-lg
                     transition-all duration-200"
        >
          New Quiz
        </button>
      </div>
    </div>
  )
}
