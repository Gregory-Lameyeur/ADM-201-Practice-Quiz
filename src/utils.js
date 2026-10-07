export function isAnswerCorrect(userAnswer, correctAnswers) {
  if (!userAnswer) return false
  if (userAnswer.length !== correctAnswers.length) return false
  const sorted = [...userAnswer].sort()
  const correct = [...correctAnswers].sort()
  return sorted.every((a, i) => a === correct[i])
}

export function computeScore(questions, userAnswers) {
  return questions.reduce(
    (acc, q, i) => acc + (isAnswerCorrect(userAnswers[i], q.answers) ? 1 : 0),
    0
  )
}
