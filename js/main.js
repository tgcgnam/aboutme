const toggleMenu = document.querySelector(".icon");

// toggle
toggleMenu.addEventListener("click", () => {
  let nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
});

// scoll
let elToShow = document.querySelectorAll(".show-on-scroll");

let isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();
  let viewHeight = window.innerHeight || document.documentElement.clientHeight;

  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
    (rect.top >= 0 && rect.bottom <= viewHeight)
  );
};

function loop() {
  elToShow.forEach((item) => {
    if (isElInViewPort(item)) {
      item.classList.add("start");
    } else {
      item.classList.remove("start");
    }
  });
}

window.onscroll = loop;

loop();
