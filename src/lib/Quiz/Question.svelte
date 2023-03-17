<script lang="ts">
	import Button from '../Button/Button.svelte';
	import TextContainer from '../Text/TextContainer.svelte';

	export let options: string[];
</script>

<template>
	<TextContainer>Which of the franchises did you read about in the story?</TextContainer>

	{#each options as option}
		<Button>{option}</Button>
	{/each}
</template>
