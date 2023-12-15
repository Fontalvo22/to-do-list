const setUpdateListener = () => {
	// El bucle para setearlo en todos
	for (let i = 0; i < taskTitle.length; i++) {
		const title = taskTitle[i];
		// limpiamos todos los demás Eventos, ya que sino se disparará uno por cada keypress
		title.addEventListener('keypress', (event) => {
			window.clearTimeout(timer);
		});
		// seteamos el evento por el ultimo keyup
		title.addEventListener('keyup', () => {
			window.clearTimeout(timer);
			timer = setTimeout(() => {
                // Esta función está en el archivo "updateTask.js"
				updateTask(title)
			}, 500);
		});
	}
}