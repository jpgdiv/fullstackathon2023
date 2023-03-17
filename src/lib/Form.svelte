<script lang="ts">
	const submitHandler = function (e: SubmitEvent) {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);

		console.log({ formData });
	};
</script>

<form on:submit={submitHandler}>
	<button type="submit">submit</button>
</form>
