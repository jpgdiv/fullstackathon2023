<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/Button/Button.svelte';
	import TextContainer from '$lib/Text/TextContainer.svelte';
	import { journey } from '../../store';
	import type { FetchResponse } from './+page';

	let value: FetchResponse | undefined;

	journey.subscribe((v) => {
		value = v;
	});
</script>

<section class="grid grid-cols-1 gap-4">
	<TextContainer>
		<article>
			{value?.response}
		</article>
	</TextContainer>

	<Button on:click={() => goto('/journey/quiz')}>next</Button>
</section>
