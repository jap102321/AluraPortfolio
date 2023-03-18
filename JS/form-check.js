export const validate = (input) => {
  const inputType = input.dataset.type;
  if (validate[inputType]) {
    validate[inputType](input);
  }

  if (input.validity.valid) {
    input.parentElement.classList.remove("contactInput--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("contactInput--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      showErrorMsg(inputType, input);
  }
};

export const validateTextArea = (tarea) => {
  const textarea = tarea.dataset.type;
  if (tarea.validity.valid) {
    tarea.parentElement.classList.remove("contactInput--invalid");
    tarea.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    tarea.parentElement.classList.add("contactInput--invalid");
    tarea.parentElement.querySelector(".input-message-error").innerHTML =
      showErrorMsg(textarea, tarea);
  }
};

const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patterMismatch",
  "customError",
];

const errorMessage = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacio.",
  },
  email: {
    valueMissing: "El campo email no puede estar vacio.",
    typeMismatch: "El correo no es válido.",
  },
  asunto: {
    valueMissing: "El campo asunto no puede estar vacio.",
  },
  mensaje: {
    valueMissing: "Debes incluir algun mensaje!",
  },
};

const showErrorMsg = (dataType, element) => {
  let message = "";
  errorTypes.forEach((err) => {
    if (element.validity[err]) {
      message = errorMessage[dataType][err];
    }
  });
  return message;
};

const buttonSubmit = document.querySelector("[data-buttonSbmt]");

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelectorAll("input").forEach((data) => {
    data.value = "";
  });
  document.querySelector("textarea").value = "";
});
