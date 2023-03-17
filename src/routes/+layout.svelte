<script>
	export const prerender = true;

	import '../app.css';

	import Header from '$lib/Header/Header.svelte';
</script>

<Header />
<slot />
