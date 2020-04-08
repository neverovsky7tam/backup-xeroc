export const onInputChange = (e) => {
  const input = e.target;
  if (input.value) {
    input.style.cssText = `border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(255, 255, 255, 0.05);
    color: #fff;`;
  } else {
    input.style.cssText = `border: 1px solid transparent;
    background-color: rgba(255, 255, 255, 0.1);`;
  }
}