import './stylus/main'
import './stylus/modal.scss'
import './stylus/list.scss'
// import json from './assets/json'
//highcharts
import './plugins/graph'
//Modal
import {Modal} from './plugins/modal'
//list
import {List} from './plugins/list'


//create list
const productList = [{
    id: 'basket1',
    title: 'Яблоки',
    img: 'apple.jpg',
    count: 1.35,
    price: 20
}, {
    id: 'basket2',
    title: 'Перец',
    img: 'papper.jpeg',
    count: 1.4,
    price: 40
}, {
    id: 'basket3',
    title: 'Помидоры',
    img: 'tomato.jpg',
    count: 4,
    price: 30
}]

new List(productList, {createModal: true, id: 'basketList'})
//end create list

// const newModalContent = `
//                 <div class="modal__body">
//                     Демонстрация работы changeContent(html) - убрали заголовок и поменяли body
//                 </div>
//                 <div class="modal__footer">
//                     футор тоже был изменен
//                     <div class="btn" data-modalEvent="close">Закрыть</div>
//                     <div class="btn_accent">Сохранить изменения</div>
//                 </div>`

// const myModalA = new Modal({
//     dataLabel: 'modal1',
//     title: 'Кастомный заголовок',
//     content: '<h3>Кастомизируем содержание модального окна</h3><p>Кастомный парагрaф</p>',
//     width: '800px',
//     footerBtns: [
//         {title: 'Ок', class: 'btn_success', handler: () => {
//             console.log('Отработала кнопка ок')
//             myModalA.close();
//         }},
//         {title: 'something btn', class: 'btn', handler: () => {
//             console.log('Отработала кнопка something')
//             myModalA.close();
//         }},
//         {title: 'Отмена', class: 'btn_warrning', handler: () => {
//             console.log('Отработала кнопка отмена')
//             myModalA.close();
//         }},
//     ]
// })

// const myModalB = new Modal({
//     dataLabel: 'modal2',
// })


//work witchEvent
// const modalChangeBtn = document.querySelector('[data-modalChange]');
// if (modalChangeBtn) {
//     modalChangeBtn.addEventListener('click', () => myModalA.changeContent(newModalContent))
// }