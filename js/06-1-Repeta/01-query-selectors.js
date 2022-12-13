const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */
// magicBtn.addEventListener('click', () => { //функція для виконяння коду функції 78по кліку на кнопку,
const navEl = document.querySelector('.site-nav'); //якщо не знайшло нічого, то поверне null, знаходить один елемент
console.dir('navEl', navEl);

const navLinksEl = document.querySelectorAll('.site-nav__link'); //якщо не знайшло нічого, то поверне пустий масив
    console.log('navLinksEl', navLinksEl);
// });
//
/*
 * Document.querySelector* и Element.querySelector  - можна шукати як по всьому документу, так і всередині батьківського елемента
 */