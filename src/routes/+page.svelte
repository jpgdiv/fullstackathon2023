<script lang="ts">
	import StartButton from '$lib/Button/StartButton.svelte';
	import TextContainer from '$lib/Text/TextContainer.svelte';
</script>

<section class="grid grid-cols-1 gap-4">
	<TextContainer>
		<article>
			<p>
				Welcome to our unique storytelling application! Here, we offer you stories that will take
				you on exciting and engaging adventures. But we don't stop there - after you've read each
				story, you'll be asked some questions to test your comprehension skills.
			</p>

			<p>
				But that's not all. Our stories are specially designed to help you relax and unwind before
				bed. You'll find yourself drifting off into a peaceful slumber in no time!
			</p>

			<p>
				So sit back, relax, and let us take you on a journey with our hilarious and bite-sized
				stories. Who knows, you might just wake up with a smile on your face, eager to read more!
			</p>
		</article>
	</TextContainer>

	<div>
		<StartButton />
	</div>
</section>
