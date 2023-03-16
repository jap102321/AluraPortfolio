import "./navDrop.js";
import "./portDrop.js";
import { validate, validateTextArea } from "./form-check.js";

const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validate(input.target);
  });
});

textArea.addEventListener("blur", (tarea) => {
  validateTextArea(tarea.target);
});
