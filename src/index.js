// import 'normalize.css';
import './styles/styles.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/footer.scss';


function updateTextInput(value) {
    document.getElementById('output-range').value = value + '%';
}

document.querySelector('.form__input_file').addEventListener('change', function () {
    let file = this.files[0];
    document.querySelector('.form__output_file').innerHTML = file.name;
});

const wrapper = document.querySelector('.form__select-wrapper');
const lists = document.querySelectorAll('.form__select-options li');
const selectButton = document.querySelector('.form__select-button');

const body = document.querySelector('body')

let options = [];

function updateSelectName(event) {
    lists.forEach(item => item.classList.remove('selected'))
    event.target.classList.add('selected')
    selectButton.firstElementChild.innerText = event.target.innerText;
    wrapper.classList.remove('active')
}

lists.forEach(item => {
    item.addEventListener('click', updateSelectName)
    options.push(item.innerHTML)
});

selectButton.addEventListener("click", () => {
    wrapper.classList.toggle('active');
});


const burgerButton = document.querySelector('.burger__header')
const navBurger = document.querySelector('.navigation__burger')

burgerButton.addEventListener('click', ()=>{
    navBurger.classList.toggle('active');
})