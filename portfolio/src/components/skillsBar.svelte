<script>
	/**
	 * @type {{ type: string; industry: string[]; name: string; imglink: string; }}
	 */
	export let tech;
</script>

<div class="border-solid border-2 border-accent box-border h-15 w-80 bg-slate-600 rounded-xl">
	<div class="grid grid-cols-2 p-3 gap-1 place-items-center">
		<div>
			<img src={tech.imglink} alt={tech.name} width="80" height="80" />
		</div>
		<div class="text-xl">
			{tech.name}
		</div>
	</div>
</div>
