const switchButtonLabel = document.getElementById('container');
const switchButton = document.getElementById('switchbutton');
const body = document.querySelector('body');

switchButton.onclick = function(){
    switchButtonLabel.classList.toggle('activate');
    switchButton.classList.toggle('activate');
    body.classList.toggle('activate');
}

/*

switchButton.addEventListener('click', () =>{
    switchButton.classList.toggle('activate');
    body.classList.toggle('activate');
    console.log('hello');
});
*/