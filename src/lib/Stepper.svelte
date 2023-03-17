<script lang="ts">
	import { currentStep } from '../store';
	import StepButton from './StepButton.svelte';

	let localStep: number;
	currentStep.subscribe((value) => (localStep = value));

	function handleClick(newStep: number) {
		currentStep.update((n) => newStep);
	}
</script>

<div class="mx-auto bg-bts-gray rounded-md p-2">
	<StepButton
		active={0 === localStep}
		on:click={() => {
			handleClick(0);
		}}>1</StepButton
	>
	<StepButton
		active={1 === localStep}
		on:click={() => {
			handleClick(1);
		}}>2</StepButton
	>
	<StepButton
		active={2 === localStep}
		on:click={() => {
			handleClick(2);
		}}>3</StepButton
	>
	<StepButton
		active={3 === localStep}
		on:click={() => {
			handleClick(3);
		}}>4</StepButton
	>
</div>
