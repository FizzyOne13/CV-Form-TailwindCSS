const modal = document.getElementById("modal");

document.onload = getName();

function getName() {
  modal.style.display = "block";
}

const closeForm = document.getElementById("close");
closeForm.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
