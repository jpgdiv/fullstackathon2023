<script lang="ts">
	import TextContainer from '$lib/Text/TextContainer.svelte';
	import { journey } from '../../store';
	import type { FetchResponse } from './+page';

	let value: FetchResponse;

	journey.subscribe((v) => {
		value = v;
	});
</script>

<section class="grid grid-cols-1 gap-4">
	<TextContainer>
		<article>
			{value.response}
		</article>
	</TextContainer>
</section>
