const currentName = document.getElementById('current')
const inputName = document.getElementById('input')
const changeNameButton = document.getElementById('change')
const colorPink = document.getElementById('pink')
const colorLightGreen = document.getElementById('lightGreen')
const colorLightBlue = document.getElementById('lightBlue')
const colorWhite = document.getElementById('white')
const backgroundColor = document.getElementById('bg')

changeNameButton.addEventListener('click', ()=> {
    // console.log(inputName.value);
    currentName.textContent = inputName.value;
})

colorPink.addEventListener('click', ()=> {
    // console.log('I AM HERE');
    backgroundColor.style.backgroundColor = "pink";
})

colorLightGreen.addEventListener('click', ()=> {
    // console.log('I AM HERE');
    backgroundColor.style.backgroundColor = "lightGreen";
})

colorLightBlue.addEventListener('click', ()=> {
    // console.log('I AM HERE');
    backgroundColor.style.backgroundColor = "lightBlue";
})

colorWhite.addEventListener('click', ()=> {
    // console.log('I AM HERE');
    backgroundColor.style.backgroundColor = "white";
})