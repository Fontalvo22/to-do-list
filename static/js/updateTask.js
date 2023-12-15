let timer;

const updateTask = (taskItem) => {
	const options = {
		method: 'PATCH',
		headers: {'Content-Type': 'application/json'},
		body: `{"taskName":"${taskItem.value}"}`
	};

		fetch(`http://localhost:3000/update-task/${taskItem.dataset.item}`, options)
			.then(response => response.json())
			.then(response => {
				const successIcon = taskItem.nextElementSibling.querySelector('.icon-tabler-check')
				successIcon.classList.add('success');

				setTimeout(() => {
					successIcon.classList.remove('success');
				}, 1000);

			})
			.catch(err => console.error(err));
}

const taskTitle = document.getElementsByClassName('task-list-item-label');

setUpdateListener();