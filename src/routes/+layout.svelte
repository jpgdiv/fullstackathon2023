<script>
	import '../app.css';

	import Header from '$lib/Header/Header.svelte';
</script>

<Header />
<div class="container mx-auto p-4">
	<button
		on:click={() => {
			const body = document.getElementsByTagName('body');
			const main = document.getElementsByTagName('main');
			body[0].classList.remove('normal');
			main[0].classList.add('invert');
			body[0].classList.add('backdrop-invert');
		}}>contast mode</button
	>
	<slot />
</div>
