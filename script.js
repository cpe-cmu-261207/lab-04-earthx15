const input = document.querySelector('input')
const btn = document.querySelector('#btn')
const todolist = []
const donelist = []
// ดึงข้อมูลจากlocal 
/* if (localStorage.todolist === null) { 
    localStorage.setItem('todo', JSON.stringify(todolist)); }

todolist = JSON.parse(localStorage.getItem('todo'))

if (localStorage.donelist === null) { 
    localStorage.setItem('done', JSON.stringify(donelist)); }

donelist = JSON.parse(localStorage.getItem('done')) */
// กดปุ่ม
btn.addEventListener('click', () => {
    if (input.value === '')
        alert("task cannot be empty")
    else {
        addtodo(input.value)
        todolist.push(input.value)
        input.value = ''
        localStorage.todo = JSON.stringify(todolist)
        localStorage.done = JSON.stringify(donelist)
    }
})
//

// รับ enter
input.addEventListener('keyup', (evnt) => {
    if (evnt.keyCode === 13) {
        if (input.value === '')
            alert("task cannot be empty")
        else {
            addtodo(input.value)
            todolist.push(input.value)
            input.value = ''
            localStorage.todo = JSON.stringify(todolist)
            localStorage.done = JSON.stringify(donelist)
        }
    }
})


function addtodo(textnow) {
    const divtesk = document.createElement('div')
    const divbtn = document.createElement('div')
    const text = document.createElement('p')
    const donebtn = document.createElement('button')
    const delbtn = document.createElement('button')
    const tlist = document.querySelector('#tlist')
    divtesk.addEventListener('mouseover', () => {
        donebtn.style.visibility = "visible"
        delbtn.style.visibility = "visible"
    })
    divtesk.addEventListener('mouseout', () => {
        donebtn.style.visibility = "hidden"
        delbtn.style.visibility = "hidden"
    })
    //ตกแต่ง
    divtesk.classList = 'px-8 shadow-inner shadow-2xl flex block p-3 my-1 justify-between items-center bg-blue rounded-md '
    divbtn.classList = 'space-x-20'
    text.innerText = textnow
    text.classList = 'text-3xl font-bold'
    donebtn.classList = 'button p-2 text-3xl font-semibold rounded-md bg-green-400'
    delbtn.classList = 'button p-2 text-3xl font-semibold rounded-md bg-red-500'
    donebtn.innerText = 'Done'
    delbtn.innerText = 'Delete'
    //ซ่อนปุ่ม
    donebtn.style.visibility = "hidden"
    delbtn.style.visibility = "hidden"
    donebtn.addEventListener('click', () => {
        todolist.splice(todolist.indexOf(text.innerText), 1)
        donelist.push(text.innerText)
        localStorage.todo = JSON.stringify(todolist)
        localStorage.done = JSON.stringify(donelist)
        adddone(text.innerText)
        divtesk.remove()
    })
    delbtn.addEventListener('click', () => {
        todolist.splice(todolist.indexOf(text.innerText), 1)
        localStorage.todo = JSON.stringify(todolist)
        localStorage.done = JSON.stringify(donelist)
        divtesk.remove()
    })
    divbtn.append(donebtn)
    divbtn.append(delbtn)
    divtesk.append(text)
    divtesk.append(divbtn)
    tlist.append(divtesk)
}

function adddone(textnow) {
    const divtesk = document.createElement('div')
    const text = document.createElement('p')
    const DoneListDiv = document.querySelector('#dlist')
    text.innerText = textnow
    text.classList = 'text-3xl'
    text.style.textDecoration = 'line-through'
    divtesk.classList = 'items-center shadow-md flex p-3 justify-between bg-green-500 rounded-md mt-2'
    divtesk.append(text)
    DoneListDiv.append(divtesk)
}






