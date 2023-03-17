<script>
	import '../app.css';

	import Header from '$lib/Header/Header.svelte';
</script>

<Header />
<div class="container mx-auto p-4">
	<button on:click={() => {

		const body = document.getElementsByTagName('body');
		body[0].classList.remove("normal")
		body[0].classList.add("invert")
		body[0].classList.add("bg-contrast")


	}}>contast mode</button>
	<slot />
</div>
