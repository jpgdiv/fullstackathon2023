<script lang="ts">

export let active: Boolean;


</script>

<button on:click class={`${active? "bg-bts-light-brown" : "bg-bts-light-gray"} px-6 py-4 mx-4 rounded-full`}>
	<slot />
</button>
