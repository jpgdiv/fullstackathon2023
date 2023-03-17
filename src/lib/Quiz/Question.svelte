<script lang="ts">
	import Button from '../Button/Button.svelte';

	export let question: [string, string[]];
	export let onCorrect: () => void;

	const gif =
		'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExODM4ZDNhZjUxZjc2MzczYjU4N2I5NjEzMTc2MDZjNmUwZTg0OWJjMiZjdD1n/tyttpHipQaMgU7fm968/giphy.gif';

	let src = gif;

	let optionSelected = false;
	let isCorrect = false;
</script>

<div class="grid grid-cols-1">
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each question[1] as option}
			<Button
				on:click={() => {
					optionSelected = true;
					isCorrect = option === question[0];
					isCorrect ? onCorrect() : undefined;
				}}>{option}</Button
			>
		{/each}
	</div>

	<img src={optionSelected && !isCorrect ? src : ''} alt="" class="justify-self-center" />
</div>
