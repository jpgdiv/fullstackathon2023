<script lang="ts">
	import Stepper from '$lib/Stepper.svelte';
	import TextContainer from '$lib/Text/TextContainer.svelte';
	import { journey } from '../../store';
	import Question from './Question.svelte';

	let options: string[] = [];

	journey.subscribe((v) => {
		options = v.used_categories;
	});
</script>

<div>
	<TextContainer>Which of the franchises did you read about in the story?</TextContainer>

	<Question {options} />

	<Stepper />
</div>
