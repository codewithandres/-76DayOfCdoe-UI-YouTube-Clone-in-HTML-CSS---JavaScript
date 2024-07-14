const menuButton = document.querySelectorAll('.menu-button');
const screenoverlay = document.querySelector('.screen-overlay');

menuButton.forEach((button) => {
	button.addEventListener('click', () => {
		document.body.classList.toggle('sidebar-hidden');
	});
});

screenoverlay.addEventListener('click', () => {
	document.body.classList.toggle('sidebar-hidden');
});
