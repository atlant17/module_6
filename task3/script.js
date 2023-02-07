// add const
const trafficLightRed = document.querySelector('#trafficLightRed');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightGreen = document.querySelector('#trafficLightGreen')

trafficLightRed.addEventListener('click', makeRed);
function makeRed() {
    trafficLightRed.style.background = ('red');
    trafficLightYellow.style.background = ('black');
    trafficLightGreen.style.background = ('black');

    // remove eventListener
    trafficLightRed.removeEventListener('click', makeRed);
    trafficLightYellow.removeEventListener('click', makeRed);
    trafficLightGreen.removeEventListener('click', makeRed);

    // set Listener
    trafficLightRed.addEventListener('clicl', makeYellow);
    trafficLightYellow.addEventListener('clicl', makeYellow);
    trafficLightGreen.addEventListener('clicl', makeYellow);
}

trafficLightYellow.addEventListener('click', makeYellow);
function makeYellow() {
    trafficLightRed.style.background = ('black');
    trafficLightYellow.style.background = ('yellow');
    trafficLightGreen.style.background = ('black');

    // remove eventListener
    trafficLightRed.removeEventListener('click', makeYellow);
    trafficLightYellow.removeEventListener('click', makeYellow);
    trafficLightGreen.removeEventListener('click', makeYellow);

    // set Listener
    trafficLightRed.addEventListener('clicl', makeGreen);
    trafficLightYellow.addEventListener('clicl', makeGreen);
    trafficLightGreen.addEventListener('clicl', makeGreen);
}

trafficLightGreen.addEventListener('click', makeGreen);
function makeGreen() {
    trafficLightRed.style.background = ('black');
    trafficLightYellow.style.background = ('black');
    trafficLightGreen.style.background = ('green');

    // remove eventListener
    trafficLightRed.removeEventListener('click', makeGreen);
    trafficLightYellow.removeEventListener('click', makeGreen);
    trafficLightGreen.removeEventListener('click', makeGreen);

    // set Listener
    trafficLightRed.addEventListener('clicl', makeRed);
    trafficLightYellow.addEventListener('clicl', makeRed);
    trafficLightGreen.addEventListener('clicl', makeRed);
}
