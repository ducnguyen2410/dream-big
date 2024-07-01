const parallax_el = document.querySelectorAll(".parallax");
const parallax_el2 = document.querySelectorAll(".parallax2");

let xValue = 0,
  yValue = 0;

let xValue2 = 0,
  yValue2 = window.innerHeight;

function update(position) {
  parallax_el.forEach((el) => {
    let zValue = position - parseFloat(getComputedStyle(el).left);
    let speedX = el.dataset.speedx;
    let speedY = el.dataset.speedy;
    el.style.transform = `translateX(calc(-50% + ${
      xValue * speedX
    }px)) translateY(calc(-50% + ${yValue * speedY}px))`;
  });
}

function update2(position) {
  parallax_el2.forEach((el) => {
    let zValue = position - parseFloat(getComputedStyle(el).left);
    let speedX = el.dataset.speedx;
    let speedY = el.dataset.speedy;
    el.style.transform = `translateX(calc(-50% + ${
      xValue * speedX
    }px)) translateY(calc(-50% + ${yValue * speedY}px))`;
  });
}

update(0);
update2(0);

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;
  update(e.clientX);
  update2(e.clientX);
});

let timeLine = gsap.timeline();
Array.from(parallax_el)
  .filter((el) => !el.classList.contains("text"))
  .forEach((el) => {
    timeLine.from(el, {
      top: `${el.offsetHeight / 2}px`,
      duration: 1,
    });
  });

timeLine.from(
  ".person",
  {
    y:
      window.innerHeight -
      document.querySelector(".person").getBoundingClientRect().top,
    duration: 1,
  },
  "1"
);
