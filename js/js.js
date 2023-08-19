const btns = document.querySelectorAll('button')
const items = document.querySelectorAll('.accordion_item')
const body = document.querySelectorAll('.__body')
const col = document.querySelector('.col-A')

// console.log(btns)
// console.log(item)
// console.log(body)
// console.log(col)

items.forEach(item => {
    item.addEventListener('click', () => {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('active');
            document.querySelector('.col-A').classList.remove('active')
        }

        item.classList.toggle('active');
        document.querySelector('.col-A').classList.add('active')
    });
});