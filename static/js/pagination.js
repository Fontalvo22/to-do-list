const taskList = document.getElementById('task-list');

const paginate = (page) => {
    fetch(`/get-tasks?page=${page.dataset.page}&offset=${page.dataset.offset}`)
        .then(response => response.json())
        .then(response => {
            const data = response.tasks;
            taskList.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                const listItem = `
                    <li class="task-list-item">
                        <input type="checkbox">
                        <input value="${data[i].descripcion}" data-item="${data[i].tarea_id}" type="text" class="task-list-item-label">
                        </input>
                        <div class="icons-container">

                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check icon-tabler-check" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M9 12l2 2l4 -4" />
                        </svg>
                        <span class="delete-btn" onClick="deleteTask(event)" title="Delete Task" data-item="${data[i].tarea_id}"></span>
                        </div>
                    </li>
                `;
                taskList.insertAdjacentHTML('beforeend', listItem);

                setUpdateListener();

            }

        })
}

const paginationButtons = document.querySelectorAll('.nav-paginate button')

for (let i = 0; i < paginationButtons.length; i++) {
    const button = paginationButtons[i];
    button.addEventListener('click', (event)=>{
        const activePaginate = document.querySelector(".nav-paginate button.active");
        activePaginate.classList.remove('active');
        event.target.classList.add('active');

        paginate(event.target);
    });
}