const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;


var p1Image = document.getElementById("p1img")
p1Image.src = `./images/dice${randomNumber1}.png`

var p2Image = document.getElementById("p2img")
p2Image.src = `./images/dice${randomNumber2}.png`


console.log({randomNumber2 , p2ImageSrc: p2Image.src})
