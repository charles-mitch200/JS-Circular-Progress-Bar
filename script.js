const number = document.querySelector(".js-number");
let counter = 0;

setInterval(() => {
  counter === 65
    ? clearInterval()
    : (counter++, (number.innerHTML = `${counter}%`));
}, 30);
