<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { techStack } from '../components/constants';
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

<body id="home" data-them="dracula">
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
		<dir class="h-24 col-span-5" />
	</div>

	<h2 id="about" class="flex text-6xl justify-center">About Me</h2>
	<div class="flex flex-cols-3 gap-7 justify-evenly ">
		<div>
			<h3 class="text-4xl text-center py-3">Langauges</h3>
			{#each techLang as tech}
				<SkillsBar {tech} />
			{/each}
		</div>
		<div>
			<h3 class="text-4xl text-center py-3">Tools</h3>
			{#each techTools as tech}
				<SkillsBar {tech} />
			{/each}
		</div>
		<div>
			<h3 class="text-4xl text-center py-3">Editors</h3>
			{#each techEditor as tech}
				<SkillsBar {tech} />
			{/each}
		</div>
	</div>
	<h2 id="publication" class="text-6xl justify-center">Publication</h2>
</body>
