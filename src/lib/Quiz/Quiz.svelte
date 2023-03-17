<script lang="ts">
	import Stepper from '$lib/Stepper.svelte';
	import TextContainer from '$lib/Text/TextContainer.svelte';
	import { currentStep, journey } from '../../store';
	import { getQuestions } from '../../utility';
	import Question from './Question.svelte';

	let questions: ReturnType<typeof getQuestions>;
	let question: [string, string[]];

	journey.subscribe((v) => {
		questions = getQuestions(v.all_categories, v.used_categories);
	});

	currentStep.subscribe((v) => {
		question = Object.entries(questions)[v];
	});
</script>

<section class="grid grid-cols-1 gap-4">
	<TextContainer>Which of the franchises did you read about in the story?</TextContainer>

	<Question {question} />

	<Stepper numQuestions={Object.keys(questions).length} />
</section>
