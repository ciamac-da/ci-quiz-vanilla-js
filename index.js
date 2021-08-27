const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

const correctAnswers = ["D", "A", "B"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const halfScore = 50
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 10;
    }
  })
  result.querySelector("span").textContent = `${score}%`
  result.classList.remove("d-none")
  result.querySelector("span").style.color = `${ score >= halfScore ? "green" : "red"}`
})

