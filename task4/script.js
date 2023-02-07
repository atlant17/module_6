// сделал для того, чтобы только при нажатии на ссылку вылезал prompt
function func(event) {
    const textField = prompt('Введите текст');
    const userText = document.querySelector('a');
    userText.textContent = textField;
    event.preventDefault()
}
// другой вариант 
/*
const text = prompt('Введите текст');
const newText = document.querySelector('a');
newText.textContent = text;
*/