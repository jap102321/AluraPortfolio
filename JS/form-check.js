export const validate = (input) => {
  const inputType = input.dataset.type;
  console.log(inputType);
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

const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patterMismatch",
  "customError",
];

const errorMessage = {
  nombre: {
    valueMissing: "El campo no puede estar vacio.",
  },
  email: {
    valueMissing: "El campo no puede estar vacio.",
    typeMismatch: "El correo no es válido.",
  },
  asunto: {
    valueMissing: "El campo no puede estar vacio.",
  },
  mensaje: {
    valueMissing: "Debes incluir algun mensaje!",
  },
};

const showErrorMsg = (inputType, input) => {
  let message = "";
  errorTypes.forEach((err) => {
    if (input.validity[err]) {
      message = errorMessage[inputType][err];
    }
  });
  return message;
};
