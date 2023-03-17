<script>
	import '../app.css';

	import Header from '$lib/Header/Header.svelte';
</script>

<Header />
<div class="container mx-auto p-4">
	<slot />
</div>
