// const str = document.querySelector('.js-custom')//обираємо по класу
// const str = document.querySelector('#hello') //обираємо по id
// const str = document.querySelectorAll('.js-custom') //поверне масив, коллекцію елементів неживих статичнихммелементів Якщо не знайде жодного, поверне пустий масив
// const arr = document.getElementsByClassName('js-custom') //не треба вказувати .крапочку. Повертає живу динамічну колекцію елементів
// console.log(arr);


// const list = document.querySelector('.js-list')
// const input =document.querySelector('.js-input')
// // const li = document.createElement('li');
// // console.log(li); //відобразить у вигляді html рядку в консольці
// // li.textContent = 'Hello world' //для відображення контенту
// input.value = "Hello from JS" //value для комунікації з користувачем
// // console.dir(li); //відобразить у вигляді об'єкта  js зі всіма властивостями в консольці
// console.dir(input);
// // list.append(li);//додали li в DOM

// // list.style.listStyle = 'none'; //прибрали маркер зі списку - використовувати інлайн стилі погана практика

// const li = document.createElement('li');
// const span = document.createElement('span');
// span.textContent = 'Hello world';
// span.classList.add('text')
// li.append(span) //помістили span в li
// list.append(li);//додали li з span в DOM


// list.classList.add('text') //додали колір по класу CSS text
//li.classList.remove('text')
// li.classList.toggle('text') //toggle додає колір по класу CSS text якщо такого класу не було

//Все що вище краще записати через шаблонні рядки - це найкращий на сьогодні метод поміщення html розмітки в DOM

// const list = document.querySelector('.js-list')
// const markup = `<li class="text"><span>Hello from <a>JS</a></span></li>`
// list.insertAdjacentHTML("beforeend",markup)


// const list = document.querySelector('.js-list')
// const listStatic = document.querySelectorAll('.js-item')
// const listDynemic = document.getElementsByClassName('js-item')


// console.log('listStatic',listStatic);
// console.log('listDynemic',listDynemic);
// console.log('before',listDynemic[listDynemic.length-1].textContent); //показує останній елемент в списку до додавання нових елем


// let markup = '';
// console.dir(list);
// const lastItem = Number(list.lastElementChild.textContent);
// console.dir(lastItem); //показує останній елемент в списку до додавання нових елем

// for (let i = 1; i < 5; i += 1){
//     markup += `<li class="js-item">${lastItem + i}</li>`
// }

// console.log(markup);
// list.insertAdjacentHTML('beforeend', markup)
// console.log('after', listDynemic[listDynemic.length - 1].textContent);//показує останній елемент в списку після додавання нових елем


/*ПРИКЛАДИ*/

const cars = [{
        model: 'Honda',
        type: 'Civic',
        price: 12000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
    },
    {
        model: 'Audi',
        type: 'Q7',
        price: 40000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
    }, {
        model: 'BMW',
        type: '5 siries',
        price: 9000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
    }, {
      
        model: 'Honda',
        type: 'Accord',
        price: 20000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
    }, {
        id: 4,
        model: 'Volvo',
        type: 'XC60',
        price: 7000,
        img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
    }, {
        model: 'Honda',
        type: 'Civic',
        price: 12000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
    }, {
        model: 'Audi',
        type: 'Q7',
        price: 40000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
    }, {
        model: 'BMW',
        type: '5 siries',
        price: 9000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
    }, {
        model: 'Honda',
        type: 'Accord',
        price: 20000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
    }, {
        model: 'Volvo',
        type: 'XC60',
        price: 7000,
        img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
    }
]

const list = document.querySelector('.js-cars');
/* <li><img src="" alt=""><h2></h2><h3></h3><p></p></li> */
//робимо деструктуризаці //не можемо поміщати весь масив, бо буде кома на сторінці, яка розділяє елементи масиву, тому переводимо в рядок масив
// const markup = cars.map(({
//     img,
//     model,
//     type,
//     price
// },idx) => `<li data-carId="${111+idx}" data-test="test" data-custom="custom">
// <img src="${img}" alt="${model}" class="image">
// <h2>Марка: ${model}</h2>
// <h3>Модель ${type}</h3>
// <p>Ціна ${price} <span>$ </span></p>
// </li>`).join('')
// console.dir(markup);
list.insertAdjacentHTML("beforeend", markup) //метод, який додає елементи
// list.innerHTML = markup;//це властивість, яка перезаписує дані при додаванні
// const p = document.querySelector('p')
// const str = p.textContent //дає достукатися лише до того, що ми фізично бачимо на сторінці, тобто до видимого тексту\контенту на сторінці
// const str = p.innerHTML//дає можливість достукатися до тегу span, в який зашито доллар
    // console.log(str);
// consol.dir(list.children);
// list.innerHTML = ''; //видаляє все за одну операцію/
// [...list.children].forEach(li => li.remove())//видаляється по одному елементу за кожну ітерацію

/*АТРИБУТИ*/
//dataSet - 
const li = document.querySelector('li');
const id = li.dataset.carid
console.dir(li.dataset);
console.log(id);
console.dir(li);

//setAttribute - можливість додавати атрибут не тільки під час розмітки, а й пізніше, як кастомні так і вбудовані

li.setAttribute('hidden', true);

//removeAttribute - видалення атрибуту
// li.removeAttribute('hidden');

//hasAttribute - перевірка чи є атрибут
console.log(li.hasAttribute('hidden'));