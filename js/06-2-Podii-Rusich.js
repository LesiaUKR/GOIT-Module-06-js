
/*Приклад з квадратом*/
// const box = document.querySelector('.js-box');
// console.log(box);
// box.addEventListener('click', onCLick); //3 параметри, 2 обовязкові(1 - тип івент лістенера, тобто подія, яку будемо слухати; 2 - колбек функція), третій ні
// let step = 50;
// function onCLick(evt) {
//     console.log(evt.currentTarget);
//     step += 50;
//     evt.currentTarget.style.margin = `${step}px`
// }

/*Приклад з кнопкою*/
// const button = document.querySelector('.js-show'); //отримуємо нашу кнопку
// const title = document.querySelector('.js-title');//отримуємо наш заголовок-
// // console.log(button);
// // console.log(title);

// button.addEventListener('click', getTitle);//, {once: true} - додаткова опція, на кількість разів для відключення можливості натиснути, по дефолту стоїть у значенні false; отримати заголовок по кліку на кнопку для цього додаємо прослуховувач на кнопку

// function getTitle(evt){ //(evt) якщо ми хочемо по кліку на якийсь елемент змінювати інший, то ми можемо не оголошувати цей елемент в параметр функції, якщо нам не треба отримати цей елемент
//     title.textContent = 'Hello from JS 😍';
//     evt.currentTarget.disabled = true; //кнопка стає неактивною після першого натискання
//     console.log(evt.currentTarget);

//     /*ще інші два способи відключити кнопку від відслідковування натискання після відпрацювання функції*/
//     // button.removeEventListener('click', getTitle)
//     // evt.currentTarget.removeEventListener('click',getTitle)
// }

/*Приклад з формою submit*/
// const cars = [{
//         id: 1,
//         car: 'Honda',
//         type: 'Civic',
//         price: 12000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
//     },
//     {
//         id: 2,
//         car: 'Audi',
//         type: 'Q7',
//         price: 40000,
//         img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
//     }, {
//         id: 33,
//         car: 'BMW',
//         type: '5 siries',
//         price: 9000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
//     }, {
//         id: 3,
//         car: 'Honda',
//         type: 'Accord',
//         price: 20000,
//         number: '+380000000000',
//         img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
//     }, {
//         id: 4,
//         car: 'Volvo',
//         type: 'XC60',
//         price: 7000,
//         img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
//     }
// ]

// const form = document.querySelector('.js-search');
// const list = document.querySelector('.js-list')

// form.addEventListener('submit', onSearch);
// // console.dir(form);
// function onSearch(evt){
//     evt.preventDefault(); //зкидаємо дефолтні налаштування \нативну поведінку html об'єктів
//     const {
//         queryValue, //для елементів форми прописуємо name в html для того, щоб дістати їх значення без querySelect
//         selectValue
//     } = evt.currentTarget.elements;
//     //  const {//не хороший варіант
// //     //     elements: {
// //     //         queryValue: {
// //     //             value: queryValue
// //     //         },
// //     //         selectValue: {
// //     //             value: selectValue
// //     //         }
// //     //     } 
//     // console.dir(evt.currentTarget.elements.queryValue);
//     console.dir(queryValue.value);
//     console.dir(selectValue.value);
//     const searchResult = cars.filter(item => item[selectValue.value] === queryValue.value) //після того як задали name можемо зчитати значення, які ввів користувач. Потім порівнюємо те що ввів користувач з аналогічними хар-ми об'єкта
//     const markup = searchResult.map(({ car, type, price, img }) =>` <li> //створюємо розмітку для результату пошуку
// <img src="${img}" alt="${car}" width="300">
// <h2>${car}</h2>
// <h3>${type}</h3>
// <h4>${price}</h4>
// </li>`).join('');
// list.innerHTML = markup; //додаємо її в DOM
// }

// // ПЕРЕРВА ДО 21.45

/*Приклад з INPUT*/

// const input = document.querySelector('.js-input');

// input.addEventListener('focus', onFocus);
// function onFocus(evt){
//     // console.log(evt);
//     console.log("пиши будь-ласка");
// }

// input.addEventListener('blur', onBlur)
// function onBlur(evt){
//     // console.log(evt);
//     console.log("все написав???");
// }


// input.addEventListener('input', onInput)

// function onInput(evt) {
//     // console.log(evt.currentTarget.value); //зчитуємо введений користучачем текст
//     const query = evt.currentTarget.value; //введемо змінну, щоб кожного разу не писати evt.currentTarget.value
// // //  "asd" => !true => false
// // //  query => !false => true /'' - пустий рядочок повертає false в булевому значенні, а інверсія ! зробить його false і тіло if виконуватися не буде
// console.log(query);
//     if (!query) { //поганий тон писати умову для if так: query === ''. Хороший тон через інверсію, бо одне значення в If автоматично конвертується в буль
//         console.log('Пустий рядочок'); //перевірка на пустий рядочок
//     }
// }

/*Приклад з клавіатурою
* keydown - коли натискаємо на клавішу
* keyup - коли відпускаємо
* keypress - коли нажали і не відпускаємо, не актуальна, не юзають, не реагує на системні клавішіesc, shift, ctrl і т.п.
* події клавіатури не вішають на html елементи, а на сам документ 
* у клавіатури немає currentTarget так як це великий системний елемент, який прослуховується весь
*/


// document.addEventListener('keydown', onPress)
// // document.addEventListener('')

// function onPress(evt) {
  
//     evt.preventDefault() //використовуємо коли працюємо з модифікаторами клавіш, тобто хочемо обробити декілька подій
// //     const keyName = 'KeyX' //використовуємо code
// //     if(evt.code === keyName){
// //         console.log("YEP");
// //     }
//   console.log(evt);
//     // if (evt.ctrlKey && evt.code === 'KeyC') {
//     //     alert('NO no no 😂');
//     //     return
//     // }
//     if(evt.shiftKey){
//         console.log('Друкуєш великими ?');
//     }
// }