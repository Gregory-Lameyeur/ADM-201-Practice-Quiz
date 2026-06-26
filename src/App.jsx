import { useState, useCallback } from 'react'
import allQuestions from './questions'
import HomeScreen from './HomeScreen'
import QuizScreen from './QuizScreen'
import ResultsScreen from './ResultsScreen'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function App() {
  const [screen, setScreen] = useState('home')
  const [quizQuestions, setQuizQuestions] = useState([])
  const [userAnswers, setUserAnswers] = useState([])

  const startQuiz = useCallback((count) => {
    const selected = shuffle(allQuestions).slice(0, count)
    setQuizQuestions(selected)
    setUserAnswers(new Array(selected.length).fill(null))
    setScreen('quiz')
  }, [])

  const finishQuiz = useCallback((answers) => {
    setUserAnswers(answers)
    setScreen('results')
  }, [])

  const retryQuiz = useCallback(() => {
    setUserAnswers(new Array(quizQuestions.length).fill(null))
    setScreen('quiz')
  }, [quizQuestions])

  const newQuiz = useCallback(() => {
    setScreen('home')
  }, [])

  return (
    <div className="min-h-screen bg-bg text-gray-100">
      {screen === 'home' && (
        <HomeScreen
          maxQuestions={allQuestions.length}
          onStart={startQuiz}
        />
      )}
      {screen === 'quiz' && (
        <QuizScreen
          questions={quizQuestions}
          onFinish={finishQuiz}
        />
      )}
      {screen === 'results' && (
        <ResultsScreen
          questions={quizQuestions}
          userAnswers={userAnswers}
          onRetry={retryQuiz}
          onNewQuiz={newQuiz}
        />
      )}
    </div>
  )
}
