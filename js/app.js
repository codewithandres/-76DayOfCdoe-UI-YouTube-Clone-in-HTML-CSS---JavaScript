const menuButton = document.querySelectorAll('.menu-button');
const screenoverlay = document.querySelector('.screen-overlay');
const themeButton = document.querySelector('.theme-button i');

// initialize dark mode base on localStorage
if (localStorage.getItem('darkMode') === 'enable') {
	document.body.classList.add('dark-mode');
	themeButton.classList.replace('ri-moon-clear-fill', 'ri-sun-line');
} else {
	themeButton.classList.replace('ri-sun-line', 'i-moon-clear-fill');
}

// toggle dark mode when theme  button is clicked
themeButton.addEventListener('click', () => {
	const isDarkMode = document.body.classList.toggle('dark-mode');

	localStorage.setItem('darkMode', isDarkMode ? 'enable' : 'disable');

	themeButton.classList.toggle('ri-sun-line', isDarkMode);
	themeButton.classList.toggle('ri-moon-clear-fill', !isDarkMode);
});

//toggle sidebar visibility when menu buttons are clicked
menuButton.forEach((button) => {
	button.addEventListener('click', () => {
		document.body.classList.toggle('sidebar-hidden');
	});
});

// toggle sidebar visibility when screen overlay is clicked
screenoverlay.addEventListener('click', () => {
	document.body.classList.toggle('sidebar-hidden');
});

//show sidebar on large screens by default
if (window.innerWidth >= 768) document.body.classList.remove('sidebar-hidden');
