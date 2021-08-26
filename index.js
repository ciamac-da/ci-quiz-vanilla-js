const form = document.querySelector(".quiz-form")

const correctAnswers = ["D", "A", "B"]

form.addEventListener("submit", e => {
    e.preventDefault()
    let score = 0
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value]
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 10
        }
        console.log(score)
        })
        })