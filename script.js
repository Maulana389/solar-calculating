// Maulana Akbar Wibowo
const mass = document.querySelector('#mass');
const selector = document.querySelector('#select-planet');
const button = document.querySelector('#btn-input');

const planet = {
    mercury: 3.6,
    venus: 8.9,
    bumi: 9.8,
    mars: 3.8,
    jupiter: 26,
    saturn: 11.1,
    uranus: 10.7,
    neptune: 14.1,
    moon: 1.6,
}

button.addEventListener('click',function(){
    if(mass.value !== '' && selector.value !== 'none'){
        document.querySelector('img').src = `asset/${selector.value}.png`;

        document.querySelector('#show-input').innerHTML = `massa yang diinput ${mass.value} jika berada di planet ${selector.value}`;
        document.querySelector('#result-weight').innerHTML = `${parseFloat(mass.value * planet[selector.value]).toFixed(2)}N`;
    }else{
        document.querySelector('#result-weight').innerHTML = 'lu yang bener aje';
    }
})