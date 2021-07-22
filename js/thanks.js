// Modal
const modal = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4"); // Get the button that opens the modal

const btn = document.querySelectorAll(".navbar-perezvon"); // When the user clicks on the button, open the modal

btn.forEach(el => {
  el.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
  });
}); // When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  switch (event.target) {
    case modal:
      modal.style.display = "none";
      document.body.style.overflow = "visible";
      break;

    case modal2:
      modal2.style.display = "none";
      document.body.style.overflow = "visible";
      break;

    case modal3:
      modal3.style.display = "none";
      document.body.style.overflow = "visible";
      break;

    default:
      break;
  }
};