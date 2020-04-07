export const onInputChange = (e) => {
  const input = e.target;
  if (input.value) {
    input.style.border = '1px solid rgba(255, 255, 255, 0.1)';
    input.style.background = 'rgba(255, 255, 255, 0.05)';
  } else {
    input.style.border = '1px solid transparent';
    input.style.background = 'rgba(255, 255, 255, 0.1)';
  }
}