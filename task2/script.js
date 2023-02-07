const consoleLog = document.querySelector('#consoleLog');
//console log
consoleLog.addEventListener('click', () => {
    console.log('Служит для вывода информации')
});
//alert
const alertExample = document.querySelector('#alert');

alertExample.addEventListener('click', () => {
    alert('Показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК».')
});
//prompt
const promptExample = document.querySelector('#prompt');

promptExample.addEventListener('click', () => {
    prompt('Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.')
})