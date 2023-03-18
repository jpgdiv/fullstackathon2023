<script lang="ts">

export let active: Boolean;
 
import {themeInput} from '../store'

</script>

<div class={`${active? "" : "hidden"} p-3 bg-bts-gray`}>
	<label>
		<h5>Add your own favorite story!</h5>
		<input placeholder="type your theme here!" on:change={(e)=> { themeInput.update(() => e.target.value)  }}  class="px-6 text-black" />
	</label>
</div>
 
