<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { techStack, papers } from '../components/constants';
	import SkillsBar from '../components/SkillsBar.svelte';
	import PublicCard from '../components/PublicCard.svelte';

	let animate: boolean = false;
	let y: number;

	onMount(() => (animate = true));

	let techLang = techStack.filter((tech) => tech.type == 'lang');
	let techTools = techStack.filter((tech) => tech.type == 'tools');
	let techEditor = techStack.filter((tech) => tech.type == 'editor');
</script>

<svelte:window bind:scrollY={y} />

<body id="home" data-theme="dracula" class="font-mono">
	<div class="grid grid-flow-cols-4 gap-4">
		<dir class="h-48 col-span-5" />
		<dir class="h-24 w-10" />
		<div>
			{#if animate}
				<div in:fly={{ y: 50, duration: 1500 }}>
					<p class="text-4xl">Hi! Call me</p>
					<p class="text-8xl text-accent">Placeholder</p>
				</div>
			{/if}
		</div>
		<dir class="h-96 col-span-5" />
	</div>

	<dir id="about" class="h-24" />
	<h2 class="flex text-6xl justify-center">About Me</h2>

	<div class="flex flex-row justify-center py-8 gap-6">
		<button class="btn btn-secondary text-xl">Web</button>
		<button class="btn btn-primary text-xl">ML/DL</button>
		<button class="btn btn-accent text-xl">Data</button>
	</div>

	<div class="flex flex-cols-3 gap-8 justify-center py-8">
		<div class="space-y-6">
			<h3 class="text-4xl text-center">Langauges</h3>
			{#each techLang as tech}
				<SkillsBar {tech} />
			{/each}
		</div>

		<div class="space-y-6">
			<h3 class="text-4xl text-center">Tools</h3>
			{#each techTools as tech}
				<SkillsBar {tech} />
			{/each}
		</div>

		<div class="space-y-6">
			<h3 class="text-4xl text-center">Editors</h3>
			{#each techEditor as tech}
				<SkillsBar {tech} />
			{/each}
		</div>
	</div>

	<dir class="h-24" />
	<h2 id="publication" class="flex text-6xl justify-center">Publication</h2>
	{#each papers as paper}
		<PublicCard {paper} />
	{/each}
</body>

<footer class="footer footer-center p-4 bg-base-300 text-base-content">
	<div>
		<p>Powered by ME</p>
	</div>
</footer>
