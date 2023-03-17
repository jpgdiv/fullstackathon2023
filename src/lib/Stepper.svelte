<script lang="ts">
	import { currentStep } from '../store';
	import StepButton from './StepButton.svelte';

	export let numQuestions: number = 0;
	let localStep: number;

	currentStep.subscribe((value) => (localStep = value));

	function handleClick(newStep: number) {
		currentStep.update((n) => newStep);
	}
</script>

<div class="mx-auto bg-bts-gray rounded-md p-2">
	{#each Array(numQuestions) as _, i}
		<StepButton
			active={i === localStep}
			on:click={() => {
				handleClick(i);
			}}>{i + 1}</StepButton
		>
	{/each}
</div>
