const colors = ['Blue','Yellow','Pink','Purple','Green','Red'];
let bttn = document.getElementById('btn');
let box1 = document.getElementById('box');
bttn.addEventListener('click',function(){
    console.log('Its Working')
    var randomC = colors[Math.floor(Math.random() * colors.length)]
    box1.style.backgroundColor = randomC
    box1.innerHTML = randomC
})