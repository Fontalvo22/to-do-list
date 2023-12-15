const deleteTask = (event)=>{
const taskId = event.target.dataset.item;


    fetch(`http://localhost:3000/delete-task/${taskId}`, {method: 'DELETE'})
        .then(response => response.json())
        .then((response) => {
            const elementToDelete = event.target.parentElement.parentElement;

            elementToDelete.classList.add('deleted-item');
            setTimeout(() => {
                elementToDelete.remove();
            }, 300);

        })
        .catch(err => console.error(err));
}


