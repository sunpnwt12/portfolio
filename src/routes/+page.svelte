<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { techStack, papers } from '../components/constants';
	import { highlightTechArray } from '../components/stores';
	import SkillsBar from '../components/SkillsBar.svelte';
	import PublicCard from '../components/PublicCard.svelte';

	let animate: boolean = false;
	let scrollY: number;

	const getTechs = (type: string) => {
		return techStack.filter((tech) => tech.type == type);
	};

	function handleFilterButton(event: MouseEvent) {
		const target = event.target as HTMLButtonElement;
		if (target.value == 'reset') {
			while ($highlightTechArray.length > 0) {
				$highlightTechArray.pop();
			}
		} else {
			if ($highlightTechArray.includes(target.value)) {
				$highlightTechArray.splice($highlightTechArray.indexOf(target.value), 1);
			} else {
				$highlightTechArray.push(target.value);
			}
		}
		$highlightTechArray = $highlightTechArray;
	}

	onMount(() => (animate = true));
</script>

<svelte:window bind:scrollY />

<body id="home" data-theme="dark" class="font-mono bg-[ #373a4d]">
	<div class="grid grid-flow-cols-4 gap-4">
		<dir class="h-48 col-span-5" />
		<dir class="h-24 w-10" />
		<div>
			{#if animate}
				<div in:fly={{ y: 50, duration: 1500 }}>
					<p class="text-4xl">Hi! Call me</p>
					<p class="text-9xl text-accent">Sun</p>
				</div>
			{/if}
		</div>
		<dir class="h-96 col-span-5" />
	</div>

	<dir id="about" class="h-24" />
	<h2 class="flex text-6xl justify-center">About Me</h2>

	<div class="flex flex-row justify-center py-8 gap-6">
		<button value="ML/DL" class="btn btn-primary text-xl" on:click={handleFilterButton}
			>ML/DL</button
		>
		<button value="Web" class="btn btn-secondary text-xl" on:click={handleFilterButton}>Web</button>
		<button value="Data" class="btn btn-accent text-xl" on:click={handleFilterButton}>Data</button>
		<button value="reset" class="btn btn-neutral text-xl" on:click={handleFilterButton}
			>Reset</button
		>
	</div>

	<div class="flex flex-cols-3 gap-8 justify-around py-8 max-w-7xl mx-auto">
		<div class="space-y-6">
			<h3 class="text-4xl text-center">Langauges</h3>
			{#each getTechs('langs') as tech (tech.id)}
				<SkillsBar {tech} />
			{/each}
		</div>

		<div class="space-y-6">
			<h3 class="text-4xl text-center">Tools</h3>
			{#each getTechs('tools') as tech (tech.id)}
				<SkillsBar {tech} />
			{/each}
		</div>

		<div class="space-y-6">
			<h3 class="text-4xl text-center">Editors</h3>
			{#each getTechs('editors') as tech (tech.id)}
				<SkillsBar {tech} />
			{/each}
		</div>
	</div>

	<dir class="h-24" />
	<h2 id="publication" class="flex text-6xl justify-center">Publication</h2>
	<div class="flex max-w-7xl mx-auto justify-around">
		{#each papers as paper}
			<PublicCard {paper} />
		{/each}
	</div>
</body>

<footer class="footer footer-center p-4 bg-base-300 text-base-content">
	<div class="text-lg">
		<p>Powered by ME</p>
		<p id="email">sun.punnawit@gmail.com</p>
	</div>
</footer>
