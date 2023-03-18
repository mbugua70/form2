const inputEl = document.querySelectorAll("#number_id");
const submitEl = document.getElementById("submit_el");
const errorEl = document.getElementById("error-el");
const msg = "Please fill out the whole field!";

for (let i = 0; i <= inputEl.length; i++) {
  submitEl.addEventListener(
    "click",
    () => {
      if (!inputEl[i].value) {
        errorEl.textContent = msg;
        return false;
      }
    },
    false
  );
}
