const form = document.querySelector(".quiz-form")
const result = document.querySelector(".result")

const correctAnswers = ["D", "A", "B", "C", "A", "B", "D", "C", "A", "D"]

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let score = 0
  const halfScore = 50
  const threeOverFourScore = 75
  const userAnswers = [
      form.q1.value, 
      form.q2.value, 
      form.q3.value, 
      form.q4.value,
      form.q5.value,
      form.q6.value,
      form.q7.value,
      form.q8.value,
      form.q9.value,
      form.q10.value,
    ];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 10;
    }
  });
  scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });

  result.classList.remove("d-none")

  let output = 0
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`
    if (output === score) {
      clearInterval(timer)
    } else {
      output++
      if (output < halfScore) {
        result.querySelector("span").style.color = "red";
      } else if (output >= halfScore && output < threeOverFourScore) {
        result.querySelector("span").style.color = "orange"
      } else {
        result.querySelector("span").style.color = "green"
      }
    }
  }, 50)

});

result.querySelector("button").addEventListener("click", () => {
  result.classList.add("d-none")
  location.reload()
});
