<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import type { TechStack } from './constants';
	export let tech: TechStack;
	export let techIndustry: string;
	let isHighlighted: boolean = false;

	function handleHighlightedTech() {
		if (techIndustry != 'Reset') {
			if (tech.industry.includes(techIndustry)) {
				isHighlighted = true;
			}
		} else {
			isHighlighted = false;
		}
	}

	onMount(() => {
		handleHighlightedTech();
	});

	afterUpdate(() => {
		handleHighlightedTech();
	});
</script>

{#if !isHighlighted}
	<div
		class="border-solid border-2 border-accent box-border h-auto w-80 bg-slate-600 rounded-xl hover:scale-105 ease-in duration-300 hover:bg-slate-500"
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
		class="border-solid border-2 border-primary-focus box-border h-auto w-80 bg-slate-600 rounded-xl hover:scale-105 ease-in duration-300 hover:bg-slate-500"
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
