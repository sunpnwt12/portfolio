<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { techStack, industries } from '../components/constants';
	import SkillsBar from '../components/skillsBar.svelte';

	/**
	 * @type {boolean}
	 */
	let animate = false;
	/**
	 * @type {number}
	 */
	let y;

	onMount(() => (animate = true));

	let techLang = techStack.filter((tech) => tech.type == 'lang');
	let techTools = techStack.filter((tech) => tech.type == 'tools');
	let techEditor = techStack.filter((tech) => tech.type == 'editor');
</script>

<svelte:window bind:scrollY={y} />

<body id="home" data-theme="dracula" class="font-mono">
	<div class="grid grid-flow-cols-5 gap-4">
		<dir class="h-24 col-span-5" />
		<dir class="h-24 col-span-5" />
		<dir class="h-24 w-10" />
		<div>
			{#if animate}
				<div in:fly={{ y: 50, duration: 1500 }}>
					<p class="text-4xl">Hi! Call me</p>
					<p class="text-8xl text-accent">Placeholder</p>
				</div>
			{/if}
		</div>
		<dir class="h-24 col-span-5" />
		<dir class="h-24 col-span-5" />
		<dir class="h-24 col-span-5" />
		<dir id="about" class="h-24 col-span-5" />
	</div>

	<h2 class="flex text-6xl justify-center">About Me</h2>
	<div class="flex flex-row justify-center py-8 gap-6">
		{#each industries as industry}
			<button class="btn btn-{industry.color} text-xl">{industry.title}</button>
		{/each}
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

	<h2 id="publication" class="flex text-6xl justify-center">Publication</h2>
</body>

<footer class="footer footer-center p-4 bg-base-300 text-base-content">
	<div>
		<p>Copyright © 2022 Powered by me</p>
	</div>
</footer>
