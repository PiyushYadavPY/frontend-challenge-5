const submit = document.getElementById("submit");
const successMsg = document.getElementById("success-msg");
const dismiss = document.getElementById("dismiss");
const successText = document.getElementById("success-text");
// const email = document.getElementById("email");
const container = document.getElementById("container");
const form = document.getElementById("form");
submit.addEventListener("click", (event) => {
  event.preventDefault();

  let inputVal = document.getElementById("email");
  let value = inputVal.value;
  let errorMsg = document.getElementById("errorMsg");
  // console.log(value);
  var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value.match(validRegex)) {
    errorMsg.innerText = "Valid email required";
    return;
  }
  errorMsg.innerText = "";
  successMsg.style.display = "block";
  form.style.display = "none";
  container.style.backgroundColor = "hsl(235, 18%, 26%)";
  successText.innerText = value;
  inputVal.value = "";
});
dismiss.addEventListener("click", (event) => {
  event.preventDefault();
  successMsg.style.display = "none";
  form.style.display = "flex";
});
