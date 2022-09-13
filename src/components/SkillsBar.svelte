<script lang="ts">
	// import { onMount, afterUpdate } from 'svelte';
	import type { TechStack } from './constants';
	import { highlightTechArray } from './stores';

	export let tech: TechStack;
	//  let filteredIndus = tech.industry.filter((item) => !$highlightTechArray.includes(item));
	$: isHighlighted = () => {
		if (!$highlightTechArray.length) {
			return false;
		} else {
			return $highlightTechArray.some((ele) => {
				return tech.industry.includes(ele);
			});
		}
	};
</script>

{#if !isHighlighted()}
	<div
		class="border-solid border-2 border-accent box-border h-auto w-80 bg-slate-600 rounded-xl hover:scale-105 ease-in duration-300 hover:bg-slate-500 hover:text-white"
	>
		<div class="grid grid-cols-2 p-3 gap-1 place-items-center">
			<div>
				<img src={tech.imglink} alt={tech.name} width="80" height="80" />
			</div>
			<div class="select-none text-xl">
				{tech.name}
			</div>
		</div>
	</div>
{:else}
	<div
		class="border-solid border-2 border-primary box-border h-auto w-80 bg-slate-500 rounded-xl hover:scale-105 ease-in duration-300 hover:bg-slate-500"
	>
		<div class="grid grid-cols-2 p-3 gap-1 place-items-center">
			<div>
				<img src={tech.imglink} alt={tech.name} width="80" height="80" />
			</div>
			<div class="select-none text-xl">
				{tech.name}
			</div>
		</div>
	</div>
{/if}
