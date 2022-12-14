/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

    /*Можна Окремо витягнути дані внесені в окремі елементи форми
  * та це недоцільно, коли маємо багато полів*/

  // const formElements = event.currentTarget.elements;
  // console.dir(formElements);

  // const mail = formElements.email.value;
  // const password = formElements.password.value;
  // const subscription = formElements.subscription.value;

  /*Потім всі ці окремі дані зібрати і записати в обєкт для відправки на сервер*/
  // const formDataSend = {
  //   mail,
  //   password,
  //   subscription,
  // }
  
/*Є зручний інструмент для збору данних з форми, коли просто треба зібрати дані*/
  const formData = new FormData(event.currentTarget);
  
  console.log(formData);
  //видає ніби як пустий обєкт, але там під капотом власний forEach і цей обєкт прямо як є можна відправляти на сервер
  
  //щоб переаірити чи цей обєкт дійсно містить дані які потрібно передати, то
  formData.forEach((value, name) => {
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
}