// Cats api https://api.thecatapi.com/v1/images/search
// Dogs api https://dog.ceo/api/breeds/image/random

const cat_button = document.querySelector("#cat_btn");
const cat_result = document.querySelector("#cat_result");

const dog_button = document.querySelector("#dog_btn");
const dog_result = document.querySelector("#dog_result");
// Объявляем переменные и присваиваем значения для кнопок и тела документа.


cat_button.addEventListener('click',getRandomCat);
dog_button.addEventListener('click',getRandomDog);
// Подписываемся на события нажатия кнопки.


function getRandomCat() {
    const url = 'https://api.thecatapi.com/v1/images/search'; // Объявляем константу в котором будет хранится ссылка на API.
    fetch(url)
    .then(response => response.json())
    .then(data => {
        cat_result.innerHTML = `<img src="${data[0].url}"/>`
    });
    // Вытаскиваем из ссылки данные формата JSON и обрабатываем их.
}
// Объявляем функцию подбора картинки случайного кота.

function getRandomDog() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Хитрюги, все таки пришлось продебажить =) (До того момента, как я досмотрел туториал)
        dog_result.innerHTML = `<img src="${data.message}"/>`;
    });
}
// Копипастим код, только немного поменяв его под собачек :-)