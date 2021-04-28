const currentName = document.getElementById('current')
const inputName = document.getElementById('input')
const changeNameButton = document.getElementById('change')
const colorPink = document.getElementById('pink')
const colorLightGreen = document.getElementById('lightGreen')
const colorLightBlue = document.getElementById('lightBlue')
const colorWhite = document.getElementById('white')
const backgroundColor = document.getElementById('bg')
const boxColor = document.getElementById('box')

changeNameButton.addEventListener('click', ()=> {
    // console.log(inputName.value);
    currentName.textContent = inputName.value;
})

colorPink.addEventListener('click', ()=> {
    // console.log('I AM HERE');
    backgroundColor.style.backgroundColor = "pink";
    boxColor.style.backgroundColor = "hotPink";
})

colorLightGreen.addEventListener('click', ()=> {
    // console.log('I AM HERE');
    backgroundColor.style.backgroundColor = "lightGreen";
    boxColor.style.backgroundColor = "green";
})

colorLightBlue.addEventListener('click', ()=> {
    // console.log('I AM HERE');
    backgroundColor.style.backgroundColor = "lightBlue";
    boxColor.style.backgroundColor = "blue";
})

colorWhite.addEventListener('click', ()=> {
    // console.log('I AM HERE');
    backgroundColor.style.backgroundColor = "white";
    boxColor.style.backgroundColor = "red";
})