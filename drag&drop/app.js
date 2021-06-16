const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

placeholders.forEach(i => {
    i.addEventListener('dragover', dragover)
    i.addEventListener('dragenter', dragenter)
    i.addEventListener('dragleave', dragleave)
    i.addEventListener('drop', dragDrop)

})
item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

function dragStart(e) {
    e.target.classList.add('hold')
    setTimeout(() => {
        e.target.classList.add('hide')
    }, 0)
}
function dragEnd(e) {
    e.target.classList.remove('hold', 'hide')
}

function dragover(e) {
    e.preventDefault()
}
function dragenter(e) {
    console.log('enter');
    e.target.classList.add('hovered')
}
function dragleave(e) {
    console.log('leave');
    e.target.classList.remove('hovered')
}
function dragDrop(e) {
    e.target.append(item)
    e.target.classList.remove('hovered')
}