<script>
	import Button from './Button.svelte';

	import { goto } from '$app/navigation';
	import { journeyStarted } from '../../store';
</script>

<Button
	on:click={() => {
		journeyStarted.update(() => true);

		goto('/journey');
	}}>Start journey</Button
>
