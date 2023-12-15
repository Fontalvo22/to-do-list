const addTask = () => {
    const taskName = document.getElementById('task-name');
    const options = {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({"taskName":taskName.value}) };

    if(taskName.value == (null || " " || "" ) || taskName.value.length == 0){
        Swal.fire({
            title: 'Error!',
            text: 'No puede agregar tareas vacias',
            icon: 'error',
            confirmButtonText: 'Llenar datos'
        })
        return false;
    }

    const taskList = document.getElementById('task-list');
    const temp = taskList.innerHTML;

    fetch('http://localhost:3000/add-task', options)
    .then(response => response.json())
    .then(response => {
        const lastChild = document.querySelector('li.task-list-item:last-child')

        const listItem = `
            <li class="task-list-item new">
                <input type="checkbox">
                <input value="${taskName.value}" data-item="${response.newId}" type="text" class="task-list-item-label">
                </input>
                <div class="icons-container">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 12l2 2l4 -4" />
                </svg>
                <span class="delete-btn" onClick="deleteTask(event)" title="Delete Task" data-item="${response.newId}"></span>
                </div>
            </li>
        `;

        lastChild.classList.add('deleted-item');
        setTimeout(() => {
            lastChild.remove();
            taskList.insertAdjacentHTML('afterbegin', listItem);
        }, 800);
    })
    .catch(err => console.error(err));
}

const createTaskBtn = document.getElementById('create-task-btn');
createTaskBtn.addEventListener('click', (event)=>{
    addTask();
});