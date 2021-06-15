1. получить перетаскиваемый элемент: '.item'
2. html: draggable="true"
3. item.addEventListener: 'dragstart', 'dragend'
4.  functions for these events: 
event.target - сам элемент (this)
e.target.classList.add('hold')

5. .hold {

}
6.  при перетаскивании элемент не должен быть виден на прежнем месте:
добавить класс, скрывающий этот элем: 
.hide {
    display: none -  скроет элемент сосвсем
}
use setTimeout  для присовения hide


