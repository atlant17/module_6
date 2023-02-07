let userText = document.querySelector('input'); 
let field = document.querySelector('#duplicateField');
let button = document.querySelector('button');

userText.addEventListener('input', event => {
    event.preventDefault();
    field.textContent = userText.value;
});

button.addEventListener('click', event => {
    event.preventDefault();
    console.log(document.querySelector('#duplicateField'));
    field.textContent = '';
    userText.value = '';
})

   
