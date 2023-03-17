<script lang="ts">
	import TextContainer from '$lib/Text/TextContainer.svelte';
	import { journey } from '../../store';
	import Question from './Question.svelte';

	let options: string[] = [];

	journey.subscribe((v) => {
		options = v.used_categories;
	});
</script>

<template>
	<TextContainer>Which of the franchises did you read about in the story?</TextContainer>

	<Question />
</template>
