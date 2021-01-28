const info = document.querySelectorAll('.info')
const body = document.querySelectorAll('.main__body')
const text = document.querySelectorAll('.text')

for (let i = 0; i < info.length; i++) {
    info[i].addEventListener('click', () => {
        body[i].classList.toggle('active')
        if (body[i].classList.contains('active')) {
            text[i].style.color = '#0078DC'
        } else {
            text[i].style.color = '#000000'
        }
    })
}