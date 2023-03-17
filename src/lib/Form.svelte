<script lang="ts">
	function submitHandler(e: SubmitEvent) {
		const formData = new FormData(e.target as HTMLFormElement);

		console.log({ formData });
	}
</script>

<form on:submit|preventDefault={submitHandler}>
	<button type="submit">submit</button>
</form>
