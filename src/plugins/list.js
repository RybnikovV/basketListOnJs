import {Modal} from './modal'

export class List {
    sumPrice = 0

    constructor(lists, options) {
        this.data = lists
        this._createList(lists)
        document.getElementById(options.id).append(this.listHTML)

        this.listHTML.addEventListener('click', (event)=>{
            const actionDeleteItem = event.target.dataset.listDeleteItem

            if (actionDeleteItem) {
                this._deleteItem(event.target)
                this._calcSum(this.data)
            }
        })

        if (options && options.createModal) {
            this.modals
            this._createModal(lists)
        }
    }

    _createList(lists) {
        this.listHTML = document.createElement('div')
        this.listHTML.classList.add('list')

        lists.forEach(listItem => {
            this.sumPrice += listItem.count * listItem.price

            this.listHTML.insertAdjacentHTML('beforeend', 
            `<div class="list__item">
                <div class="d-flex aligin-center list__item-content">
                    <div class="list__img">
                        <img src="./img/${listItem.img}" alt="">
                    </div>
                    <div class="list__text">${listItem.title}</div>
                    <div>Цена:${listItem.price}</div>
                    <div>Кол-во:<input type="number" value="${listItem.count}" data-list="changeCount">кг</div>
                    <div class="list__price">Итоговая цена:${listItem.count * listItem.price}</div>
                </div>
                <div class="list__item-actions">
                    <div class="btn_info" data-modalInfo="${listItem.id}">Подробнее</div>
                    <div class="btn_danger" data-list-delete-item="${listItem.id}">Удалить</div>
                </div>
            </div>`)
          })


        this.listHTML.insertAdjacentHTML('beforeend', `<div class="list__item justify-right" data-list-sum-price="listSum">ИТОГ:<b>${this.sumPrice}</b></div>`)
    }

    _createModal(lists) {
        lists.forEach(listItem => {
            new Modal({
                dataLabel: listItem.id,
                title: listItem.title,
                content: `<img src="./img/${listItem.img}" alt="" width="300px"><div>Цена за кг: ${listItem.price}</div> <div>Обьем: ${listItem.count}кг</div>`,
            })
        })
    }

    _deleteItem(elem) {
        this.data = this.data.filter(item => {
            return item.id !== elem.dataset.listDeleteItem
        })

        elem.closest('.list__item').classList.add('hidden')
    }

    _calcSum(data) {
        this.sumPrice = 0

        data.forEach(listItem => {
            this.sumPrice += listItem.count * listItem.price
        })

        this.listHTML.querySelector('[data-list-sum-price]').innerHTML = `ИТОГ:<b>${this.sumPrice}</b>`
    }
}