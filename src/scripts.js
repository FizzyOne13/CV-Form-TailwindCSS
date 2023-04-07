const modal = document.getElementById("modal");

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

function setName() {
  let val = document.getElementById("name-input").value;
  document.getElementById("name").innerHTML = val;
  modal.style.display = "none";
}
