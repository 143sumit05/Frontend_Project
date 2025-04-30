window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  let windowHeight = window.innerHeight;

  if (
    scrollPosition >= windowHeight * 0.01 &&
    scrollPosition <= windowHeight / 2
  ) {
    let translateValue = -200 + (scrollPosition / (windowHeight / 2)) * 200;

    document.getElementById(
      "skillSet1"
    ).style.transform = translateX(${translateValue}px);
  }

  if (scrollPosition > windowHeight / 2) {
    document.getElementById("skillSet1").style.transform = translateX(0px);
  }

  if (
    scrollPosition >= windowHeight * 0.01 &&
    scrollPosition <= windowHeight / 2
  ) {
    let translateValue = 150 - (scrollPosition / (windowHeight / 2)) * 150;

    document.getElementById(
      "skillSet2"
    ).style.transform = translateX(${translateValue}px);
  }

  if (scrollPosition > windowHeight / 2) {
    document.getElementById("skillSet2").style.transform = translateX(0px);
  }
});

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  let windowHeight = window.innerHeight;

  if (
    scrollPosition >= windowHeight * 0.6 &&
    scrollPosition <= windowHeight * 2
  ) {
    let translateValue =
      -200 + ((scrollPosition - windowHeight * 0.6) / (windowHeight / 2)) * 200;

    translateValue = Math.min(translateValue, 0);

    document.getElementById(
      "skillSet3"
    ).style.transform = translateX(${translateValue}px);
  }

  if (scrollPosition > windowHeight * 2) {
    document.getElementById("skillSet3").style.transform = translateX(0px);
  }

  if (
    scrollPosition >= windowHeight * 0.6 &&
    scrollPosition <= windowHeight * 2
  ) {
    let translateValue =
      150 - ((scrollPosition - windowHeight * 0.6) / (windowHeight / 2)) * 150;

    translateValue = Math.max(translateValue, 0);

    document.getElementById(
      "skillSet4"
    ).style.transform = translateX(${translateValue}px);
  }

  if (scrollPosition > windowHeight * 2) {
    document.getElementById("skillSet4").style.transform = translateX(0px);
  }
});

// row 3

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  let windowHeight = window.innerHeight;

  if (
    scrollPosition >= windowHeight * 1.02 &&
    scrollPosition <= windowHeight * 2
  ) {
    let translateValue =
      -200 +
      ((scrollPosition - windowHeight * 1.02) / (windowHeight / 2)) * 200;

    translateValue = Math.min(translateValue, 0);

    document.getElementById(
      "skillSet5"
    ).style.transform = translateX(${translateValue}px);
  }

  if (scrollPosition > windowHeight * 2) {
    document.getElementById("skillSet5").style.transform = translateX(0px);
  }

  if (
    scrollPosition >= windowHeight * 1.02 &&
    scrollPosition <= windowHeight * 2
  ) {
    let translateValue =
      150 - ((scrollPosition - windowHeight * 1.02) / (windowHeight / 2)) * 150;

    translateValue = Math.max(translateValue, 0);

    document.getElementById(
      "skillSet6"
    ).style.transform = translateX(${translateValue}px);
  }

  if (scrollPosition > windowHeight * 2) {
    document.getElementById("skillSet6").style.transform = translateX(0px);
  }
});

// project 1 and 2 eventListner

window.addEventListener("scroll", () => {
  const vh = window.innerHeight; // Viewport height
  const scrollY = window.scrollY; // Scroll position

  // Elements
  const project1 = document.getElementById("project1");
  const project2 = document.getElementById("project2");

  const startScroll = 3.3 * vh;
  const endScroll = startScroll + 0.5 * vh;
  // Animate project1
  if (scrollY >= startScroll && scrollY <= endScroll) {
    const progress1 = (scrollY - startScroll) / (endScroll - startScroll);
    const translateX1 = 410 * (1 - progress1);
    project1.style.transform = translateX(${translateX1}px);
  } else if (scrollY > endScroll) {
    project1.style.transform = "translateX(0px)";
  }

  // Animate project2
  if (scrollY >= startScroll && scrollY <= endScroll) {
    const progress2 = (scrollY - startScroll) / (endScroll - startScroll);
    const translateX2 = -410 * (1 - progress2);
    project2.style.transform = translateX(${translateX2}px);
  } else if (scrollY > endScroll) {
    project2.style.transform = "translateX(0px)";
  }
});

// project 3 and 4 eventListner

window.addEventListener("scroll", () => {
  const vh = window.innerHeight; // Viewport height
  const scrollY = window.scrollY; // Scroll position

  // Elements
  const project3 = document.getElementById("project3");
  const project4 = document.getElementById("project4");

  // Scroll thresholds
  const startScroll = 4 * vh;
  const endScroll = startScroll + 0.5 * vh;

  // Animate project3
  if (scrollY >= startScroll && scrollY <= endScroll) {
    const progress1 = (scrollY - startScroll) / (endScroll - startScroll);
    const translateX1 = 410 * (1 - progress1);
    project3.style.transform = translateX(${translateX1}px);
  } else if (scrollY > endScroll) {
    project3.style.transform = "translateX(0px)";
  }

  // Animate project2
  if (scrollY >= startScroll && scrollY <= endScroll) {
    const progress2 = (scrollY - startScroll) / (endScroll - startScroll);
    const translateX2 = -410 * (1 - progress2);
    project4.style.transform = translateX(${translateX2}px);
  } else if (scrollY > endScroll) {
    project4.style.transform = "translateX(0px)";
  }
});

// project 5 and 6 eventListner

window.addEventListener("scroll", () => {
  const vh = window.innerHeight; // Viewport height
  const scrollY = window.scrollY; // Scroll position

  // Elements
  const project5 = document.getElementById("project5");
  const project6 = document.getElementById("project6");

  // Scroll thresholds
  const startScroll = 4.7 * vh;
  const endScroll = startScroll + 0.5 * vh;

  // Animate project5
  if (scrollY >= startScroll && scrollY <= endScroll) {
    const progress1 = (scrollY - startScroll) / (endScroll - startScroll);
    const translateX1 = 410 * (1 - progress1);
    project5.style.transform = translateX(${translateX1}px);
  } else if (scrollY > endScroll) {
    project5.style.transform = "translateX(0px)";
  }

  // Animate project2
  if (scrollY >= startScroll && scrollY <= endScroll) {
    const progress2 = (scrollY - startScroll) / (endScroll - startScroll);
    const translateX2 = -410 * (1 - progress2);
    project6.style.transform = translateX(${translateX2}px);
  } else if (scrollY > endScroll) {
    project6.style.transform = "translateX(0px)";
  }
});
// Select the form element by its ID
const form = document.getElementById('contactForm');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from actually submitting
  alert('Your message has been submitted successfully!');
  form.reset(); // Clear the form fields
});