console.log('welcome')

const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
const todoResult = document.querySelector('.todo-result')
const todoAction = document.querySelector('.action.div')




function addTodo(e){
    e.preventDefault();
    const todoLi = document.createElement("li")
    todoLi.classList.add('border')
    todoLi.classList.add('py-2')
    todoLi.classList.add('px-4')
    todoLi.classList.add('my-1')


    const todoTitle = document.createElement('h4') 
    todoTitle.classList.add('d-inline-block')
    todoTitle.classList.add('me-5')
    todoTitle.innerText = todoInput.value
    todoLi.appendChild(todoTitle)

    const todoAction = document.createElement('div')
    todoAction.classList.add('action-div')
    todoAction.classList.add('d-inline-block')

    const btncomplete = document.createElement('button')
    btncomplete.classList.add('btn')
    btncomplete.classList.add('btn-primary')
    btncomplete.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoAction.appendChild(btncomplete)


    const btndelete = document.createElement('button')
    btndelete.classList.add('btn')
    btndelete.classList.add('btn-danger')
    btndelete.innerHTML = '<i class="fa-solid fa-trash"></i>'
    todoAction.appendChild(btndelete)

    todoLi.appendChild(todoAction)
    todoResult.appendChild(todoLi)
    todoInput.value= ''
}

function todoToggle(e){
    console.log('in Toggle')
    const item = e.target
    if (item.classList[1] == 'fa-check'){
        console.log('completed')
        const taskLi = item.parentElement.parentElement.parentElement
        taskLi.childNodes[0].classList.toggle('complete')
    }
    else if (item.classList[1] = 'fa-trash'){
        console.log('delete')
        item.parentElement.parentElement.parentElement.classList.toggle('delete')
        //taskLi.childNodes[0].classList.toggle('delete')
    }
}

todoBtn.addEventListener('click', addTodo);
todoResult.addEventListener('click', todoToggle)