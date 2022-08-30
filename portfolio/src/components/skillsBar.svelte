<script lang="ts">
	import type { TechStack } from './constants';
	export let tech: TechStack;
</script>

<div
	class="border-solid border-2 border-accent box-border h-15 w-80 bg-slate-600 rounded-xl hover:scale-105 ease-in duration-300"
>
	<div class="grid grid-cols-2 p-3 gap-1 place-items-center">
		<div>
			<img src={tech.imglink} alt={tech.name} width="80" height="80" />
		</div>
		<div class="text-xl">
			{tech.name}
		</div>
	</div>
</div>
