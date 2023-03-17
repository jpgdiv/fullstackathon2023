<script lang="ts">
	import Button from '../Button/Button.svelte';

	export let options: string[];
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each options as option}
		<Button>{option}</Button>
	{/each}
</div>
