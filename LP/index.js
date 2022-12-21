const getHam = document.getElementById('ham');
const openHam = document.getElementById('open-hamburger');
// console.log(getHam);
// console.log(openHam);

getHam.addEventListener('click', () =>{
    openHam.classList.toggle('hidden');
})