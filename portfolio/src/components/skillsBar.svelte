<script>
	/**
	 * @type {{type: string; industry: string[]; name: string; imglink: string}}
	 */
	export let tech;
</script>

<div>
	<div class="grid grid-cols-2 gap-4 place-items-center">
		<div class="py-4">
			<img src={tech.imglink} alt={tech.name} width="75" height="75" />
		</div>
		<div>
			{tech.name}
		</div>
	</div>
</div>
