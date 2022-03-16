export class Modal {
    constructor(options) { //dataLabel, title?, content?, width?: string, footerBtns
        this._options = options
        this._modal = this._getModalBody(options)
        const btns = document.querySelectorAll(`div[data-modalInfo=${options.dataLabel}]`)

        btns.forEach(btn => {
            btn.addEventListener('click', () => this.open())
        })
        this._modal.addEventListener('click', e => {//прием называется делегирование событий
            if (e.target.dataset.modalevent && e.target.dataset.modalevent === 'close') this.close()
        })
        document.body.append(this._modal)
    }

    _getModalBody(options) {
        let footerContainer,
            resultModal = document.createElement('div')

        resultModal.classList.add('modal')
        resultModal.innerHTML = `
                <div class="modal__overlay" data-modalEvent="close">
                    <div class="modal__content" style= width:${options.width ?? "500px"}>
                        <div class="modal__header">
                            <h5>
                                ${options.title ?? 'Modal title'} // оператор нулевого слияния
                            </h5>
                            <div class="btn" data-modalEvent="close">
                                <i class="fa-solid fa-4"></i>
                            </div>
                        </div>
                        
                        <div class="modal__body">
                            ${options.content ?? 'Поле контент не задано'}
                        </div>
                    </div>
                </div>`
        
        if (options.footerBtns && options.footerBtns.length) {
            footerContainer = document.createElement('div')
            footerContainer.classList.add('modal__footer')

            options.footerBtns.forEach(footerBtn => {
                const btn = document.createElement('div')
                btn.textContent = footerBtn.title
                btn.className = `btn ${footerBtn.class ? footerBtn.class : 'btn_secondary'}`
                btn.addEventListener('click', () => footerBtn.handler())
                footerContainer.append(btn)
            })
            resultModal.querySelector('.modal__body').after(footerContainer)
        }

        return resultModal
    }

    close() {
        this._modal.classList.add('modal_closing')

        setTimeout(() => {
            this._modal.classList.remove('modal_open')
            this._modal.classList.remove('modal_closing')
            this._modal.style.display = ''
        }, 500)
    }

    open() {
        this._modal.style.display = 'block'
        setTimeout(()=>{this._modal.classList.add('modal_open')}, 0)
    }

    destroy() {
        this._modal.remove()
        document.querySelectorAll(`div[data-modalInfo=${this._options.dataLabel}]`).forEach(btn => {
            btn.removeEventListener('click', this._modalHandler)
        })
    }

    changeContent(html) {
        this._modal.querySelector('.modal__content').innerHTML = html
    }
}

//diamond. disappear. gemstone. unique. worth. fortune.crime.steal.sparkly. gamble. upset. backbone. decide