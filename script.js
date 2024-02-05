const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "GOOD";
  gif.src =
    "https://gifdb.com/images/high/cat-kiss-love-hearts-fmy9xzekhcve1nen.gif";
});

noBtn.addEventListener("click", () => { // Fixed typo here (changed noBtnBtn to noBtn)
  question.innerHTML = "TF YOU MEAN NO?";
  gif.src =
    "https://media1.tenor.com/m/yNMGjXsoYGUAAAAd/cat-cats.gif";
});
