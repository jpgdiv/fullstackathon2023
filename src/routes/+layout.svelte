<script>
	import '../app.css';
	import { BarLoader } from 'svelte-loading-spinners';
	import Header from '$lib/Header/Header.svelte';
	import { loadingState } from '../store';
	let isLoading = false
	loadingState.subscribe((v) => {isLoading = v});


</script>

<Header />
<div class="container mx-auto p-4">
	<div class={isLoading ? "":"hidden"} >

		<BarLoader size="500" color="#FF3E00" unit="px" duration="1s" />
	</div>
	<slot />
</div>
