<script lang="ts">
	import { browser } from '$app/environment';
	import { themeToggleCounter } from '../store';

	let darkMode = true;

	let localCounter = 0;

	themeToggleCounter.subscribe((value) => {
		localCounter = value;
	});

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		themeToggleCounter.update((c) => c++);

		if (localCounter > 3) {
			const body = document.getElementsByTagName('body');
			const main = document.getElementsByTagName('main');
			body[0].classList.remove('normal');
			main[0].classList.add('invert');
			body[0].classList.add('backdrop-invert');
		}

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	browser
		? (darkMode =
				localStorage.theme === 'dark' ||
				(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
		: undefined;
</script>

<label>
	<input checked={darkMode} on:click={handleSwitchDarkMode} type="checkbox" id="theme-toggle" />
	<span>Dark mode</span>
</label>
