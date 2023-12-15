let timer;

const changeStatus = (btnItem) => {
	const options = {
		method: 'PATCH',
		headers: {'Content-Type': 'application/json'},
		body: `{"taskName":"${btnItem.value}"}`
	};

		fetch(`http://localhost:3000/update-task/${btnItem.dataset.item}`, options)
			.then(response => response.json())
			.then(response => {
				const successIcon = btnItem.nextElementSibling.querySelector('.icon-tabler-check')
				successIcon.classList.add('success');

				setTimeout(() => {
					successIcon.classList.remove('success');
				}, 1000);

			})
			.catch(err => console.error(err));
}

const taskBtn = document.getElementsByClassName('check-task');

for (let i = 0; i < taskBtn.length; i++) {
    const btn = taskBtn[i];
    btn.addEventListener('click', changeStatus(btn));
}