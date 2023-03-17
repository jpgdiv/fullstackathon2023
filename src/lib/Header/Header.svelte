<script>
	import ThemeSwitch from '$lib/ThemeSwitch.svelte';
	import AppTitle from './AppTitle.svelte';
</script>

<header class="grid grid-cols-2 gap-4">
	<AppTitle />

	<div class="justify-self-end">
		<ThemeSwitch />
	</div>
</header>
