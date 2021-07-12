// Accrdions
const accordionTrigger = document.querySelectorAll(".accordion__trigger"),
      accordionBody = document.querySelectorAll(".accordion__body");

const accordionsToggle = (triggers, bodyElements) => {
  triggers.forEach((el) => {
    el.addEventListener("click", () => {
      //Находим контентную часть у ближайшего родителя
      const elBody = el.closest(".accordion-item").querySelector(".accordion__body");
      el.classList.toggle('accordion__trigger--active');
      elBody.style.height = `${elBody.scrollHeight}px`;
      if (elBody.style.height === "0px" || window.getComputedStyle(elBody).height === "0px") {
        el.setAttribute("aria-expanded", "true");
        elBody.setAttribute("aria-hidden", "false");
      } else {
        elBody.style.height = "0";
        el.setAttribute("aria-expanded", "false");
        elBody.setAttribute("aria-hidden", "true");
      }
    });
  });
  bodyElements.forEach((el) => {
    el.addEventListener("transitionend", () => {
      if (el.style.height !== "0px") {
        el.style.height = "auto";
      }
    });
  });
};
accordionsToggle(accordionTrigger, accordionBody);

// Scroll to #

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
    })
  })
}

// Modal
const modal = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");

const video = document.querySelector('.play-video')

// Get the button that opens the modal
const btn = document.querySelectorAll(".navbar-perezvon");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("play");


// Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.forEach((el) => {
  el.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
  })
})
btn2.onclick = function() {
  modal2.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn3.onclick = function() {
  modal3.style.display = "block";
  document.body.style.overflow = 'hidden';
}
btn4.onclick = function() {
  modal4.style.display = "flex";
  document.body.style.overflow = 'hidden';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  switch (event.target) {
    case modal:
      modal.style.display = "none";
      document.body.style.overflow = "visible"
      break;
    case modal2:
      modal2.style.display = "none";
      document.body.style.overflow = "visible"
      break;
    case modal3:
      modal3.style.display = "none";
      document.body.style.overflow = "visible"
      break;
    case modal4:
      modal4.style.display = "none";
      document.body.style.overflow = "visible"
      video.pause();
      video.currentTime = 0;
      break;
    default:
      break;
  }
}


// Animation

// Создать наблюдателя
const observer = new IntersectionObserver(entries => {
  // перебор записей
  entries.forEach(entry => {
    // если элемент появился
    if (entry.isIntersecting) {
      // добавить ему CSS-класс
      entry.target.classList.add('animation');
    }
  });
});
observer.observe(document.querySelector('.title'));


const e = document.querySelectorAll("[data-animate-on-scroll]")
const t = new IntersectionObserver((e=>{
  e.forEach((e=>{
    e.isIntersecting && e.target.setAttribute("data-animate-on-scroll", "animated")
  }
  ))
}),{
  threshold: 0.25
});

e.forEach((e=>{
  t.observe(e)
}
))