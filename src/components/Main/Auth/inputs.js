export const onInputChange = (input, errorElement, password) => {
  const error = +input.dataset.error;

  if (input.value && !error) {
    input.style.cssText = `
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(255, 255, 255, 0.05);
      color: #fff`;
  }

  if (input.value && error) checkInputCorrect(input, errorElement, password);

  if (!input.value) {
    input.style.border = '1px solid transparent';
    input.style.backgroundColor = '';
    errorElement.style = '';
    input.dataset.check = 0;
  }
}


export const checkInputValue = (input, errorElement, passwordField) => {
  if (input.value) {
    checkInputCorrect(input, errorElement, passwordField);
  }
}

export const checkInputCorrect = (input, errorElement, passwordField) => {
  const inputType = input.dataset.type;

  let error = false;
  if (inputType === 'name') error = (input.value) ? false : true;
  if (inputType === 'email') error = (input.value.includes('@')) ? false : true;
  if (inputType === 'pass') error = (input.value.length >= 4) ? false : true;
  if (inputType === 'confirm') {
    if (input.value) error = (input.value === passwordField.value) ? false : true;
    else error = true;
  }

  if (error) {
    input.style.cssText = `
        border: 1px solid #ff4757;
        background-color: #0b0c23;
        color: #fff`;
    errorElement.style.display = 'block';
    input.dataset.error = 1;
    input.dataset.check = 0;
  } else {
    input.style.cssText = `
        border: 1px solid rgba(255, 255, 255, 0.1);
        background-color: rgba(255, 255, 255, 0.05);
        color: #fff`;
    errorElement.style = '';
    input.dataset.check = 1;
  }
}