let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.button');

let expression = "";

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.innerText;

    if (value === 'C') {
      expression = "";
      input.value = "";
    } else {
      expression += value;
      input.value = expression.replace(/X/g, '*');

      try {
        // Only try evaluating if the last character is a number or closing bracket
        const cleaned = expression.replace(/X/g, '*');
        const last = value.match(/[0-9)]/);
        if (last) {
          input.value = eval(cleaned);
        }
      } catch {
        input.value = "Invalid";
      }
    }
  });
});
