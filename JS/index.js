import "./navDrop.js";
import "./portDrop.js";
import { validate } from "./form-check.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validate(input.target);
  });
});
