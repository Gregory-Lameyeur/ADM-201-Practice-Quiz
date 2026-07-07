import { useState, useCallback, useEffect } from 'react'
import adm201Questions from './questions'
import appBuilderQuestions from './questionsAppBuilder'
import HomeScreen from './HomeScreen'
import QuizScreen from './QuizScreen'
import ResultsScreen from './ResultsScreen'
import { computeScore } from './utils'

const QUESTION_POOLS = {
  'ADM-201': adm201Questions,
  'App Builder': appBuilderQuestions,
}

const SESSION_KEY = 'quizSession'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function loadSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || !Array.isArray(parsed.quizQuestions) || parsed.quizQuestions.length === 0) {
      return null
    }
    return parsed
  } catch {
    return null
  }
}

function clearSession() {
  try {
    sessionStorage.removeItem(SESSION_KEY)
  } catch {
    // sessionStorage unavailable; nothing to clear
  }
}

const savedSession = loadSession()

export default function App() {
  const [screen, setScreen] = useState(savedSession?.screen ?? 'home')
  const [cert, setCert] = useState(savedSession?.cert ?? 'ADM-201')
  const [quizQuestions, setQuizQuestions] = useState(savedSession?.quizQuestions ?? [])
  const [currentIndex, setCurrentIndex] = useState(savedSession?.currentIndex ?? 0)
  const [userAnswers, setUserAnswers] = useState(savedSession?.answers ?? [])

  const startQuiz = useCallback((count) => {
    const selected = shuffle(QUESTION_POOLS[cert]).slice(0, count)
    setQuizQuestions(selected)
    setCurrentIndex(0)
    setUserAnswers(new Array(selected.length).fill(null))
    setScreen('quiz')
  }, [cert])

  const handleProgress = useCallback((index, answers) => {
    setCurrentIndex(index)
    setUserAnswers(answers)
  }, [])

  const finishQuiz = useCallback((answers) => {
    setUserAnswers(answers)
    setScreen('results')
    clearSession()
  }, [])

  const retryQuiz = useCallback(() => {
    setUserAnswers(new Array(quizQuestions.length).fill(null))
    setCurrentIndex(0)
    setScreen('quiz')
  }, [quizQuestions])

  const newQuiz = useCallback(() => {
    clearSession()
    setScreen('home')
  }, [])

  const quitQuiz = useCallback(() => {
    clearSession()
    setQuizQuestions([])
    setUserAnswers([])
    setCurrentIndex(0)
    setScreen('home')
  }, [])

  useEffect(() => {
    if (screen !== 'quiz') return
    const session = {
      cert,
      quizQuestions,
      currentIndex,
      answers: userAnswers,
      score: computeScore(quizQuestions, userAnswers),
      screen,
    }
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(session))
    } catch {
      // sessionStorage unavailable; skip persistence
    }
  }, [screen, cert, quizQuestions, currentIndex, userAnswers])

  return (
    <div className="min-h-screen bg-bg text-gray-100">
      {screen === 'home' && (
        <HomeScreen
          cert={cert}
          onSelectCert={setCert}
          maxQuestions={QUESTION_POOLS[cert].length}
          onStart={startQuiz}
        />
      )}
      {screen === 'quiz' && (
        <QuizScreen
          cert={cert}
          questions={quizQuestions}
          initialIndex={currentIndex}
          initialAnswers={userAnswers}
          onProgress={handleProgress}
          onFinish={finishQuiz}
          onQuit={quitQuiz}
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
