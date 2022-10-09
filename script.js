// https://www.badfon.ru/ - фотографии на разные темы
// https://icons8.com/line-awesome

const wrapper = document.querySelector('.wrapper');

const photo_wrapper = document.querySelector('.photo_wrapper');
// const button_left = document.querySelector('.button_left');
// const button_right = document.querySelector('.button_right');
// const button = document.querySelector('.button');
// const photo = document.querySelector('.photo');
const [ button_left, button_right ] = document.querySelectorAll('.trigger button');

const photos_array = [];

// const set_photo = (img_address) => {
//     let img = document.createElement('img');
//     img.classList.add('photo');
//     img.setAttribute('src', `${img_address}`);
//     img.setAttribute('alt', 'Picture');
//     photos_array.push(img);
// }

const set_photo = (img_address) => {
    photos_array.push(img_address);
}

set_photo('autumn/img_1.jpg');
set_photo('autumn/img_2.jpg');
set_photo('autumn/img_3.jpg');
set_photo('autumn/img_4.jpg');
set_photo('autumn/img_5.jpg');
set_photo('autumn/img_6.jpg');
set_photo('autumn/img_7.jpg');

let photo = document.createElement('img');
photo.classList.add('photo');
photo.setAttribute('src', photos_array[0]);
photo_wrapper.append(photo);

// Тест:
// photo_wrapper.append(photos_array[2]);
// photo_wrapper.append(photos_array[3]);
// console.log(photos_array[3]);

// Тест ля варианта с массивом с полными данными:
// photo.addEventListener('click', (event) => {
//     event.target.src = photos_array[3].src
//     console.log(event.target)
//     console.log(event.target.src)
// });

// Тест для варианта с массивом, в котором записаны только ссылки на изображения:
// photo.addEventListener('click', (event) => {
//     photo.src = photos_array[3]
//     console.log(event.target)
// });

let photoIndex = 0;

// Вариант мой:
// button_right.addEventListener('click', (event) => {
//     if(photoIndex < photos_array.length - 1)
//         photo.src = photos_array[++photoIndex % photos_array.length]
// });
// button_left.addEventListener('click', (event) => {
//     if(photoIndex > 0)
//     photo.src = photos_array[--photoIndex % photos_array.length]
// });

// Вариант преподавателя:
button_right.addEventListener('click', (event) => {
    photo.src = photos_array[++photoIndex % photos_array.length]
});

button_left.addEventListener('click', (event) => {
    if(photoIndex === 0) {
        photoIndex = photos_array.length;
    }
    photo.src = photos_array[--photoIndex % photos_array.length]
});

// a++ - сначала возвращает значение, а потом увеличивает его на единицу
// ++a - сначала увеличивает на единицу, а потом возвращает


// Деструктуризация:
/* const user = {
  firstname: 'Anton',
  lastname: 'Ivanov',
  age: 38
}

const showMessage = obj => {
  console.log(`Hello ${obj.firstname}. You are ${obj.age} years old!`)
}

const showMessage_1 = ({ firstname, age }) => {
  console.log(`Hello ${firstname}. You are ${age} years old!`)
}

showMessage(user);
showMessage_1(user); */

