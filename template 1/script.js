const quest = document.querySelectorAll(".quest");
console.log(quest);

quest.forEach((q) => {
  q.addEventListener("click", () => {
    console.log("CIAO");
    q.classList.toggle("clicked");
  });
});

quest.addEventListener("click", () => {
  console.log("CIAO");
  quest.classList.toggle("clicked");
});
