<script lang="ts">

export let active: Boolean;
let localTheme:string="";
import {themeInput} from '../store'

</script>

<div class={`${active? "" : "hidden"} p-3 bg-bts-gray`}>
	<label>
		<h5>Add your own favorite story!</h5>
		<input placeholder="type your theme here!" value={localTheme} on:input={()=> { themeInput.update(() => localTheme)  }}  class="px-6 text-black" />
	</label>
</div>
 
