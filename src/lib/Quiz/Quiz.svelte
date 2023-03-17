<script lang="ts">
	import Stepper from '$lib/Stepper.svelte';
	import TextContainer from '$lib/Text/TextContainer.svelte';
	import { currentStep, journey } from '../../store';
	import Question from './Question.svelte';

	let options: string[] = [];

	let correctOption: string;

	journey.subscribe((v) => {
		options = v.used_categories;
	});

	currentStep.subscribe((v) => {
		correctOption = options[v];
	});
</script>

<section class="grid grid-cols-1 gap-4">
	<TextContainer>Which of the franchises did you read about in the story?</TextContainer>

	<span>correctOption: {correctOption}</span>

	<Question {options} />

	<Stepper />
</section>
