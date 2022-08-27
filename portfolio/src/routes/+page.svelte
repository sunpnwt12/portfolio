<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let animate = false;
	/**
	 * @type {number | null | undefined}
	 */
	let y;
	onMount(() => (animate = true));
</script>

<svelte:window bind:scrollY={y} />

<div id="home" data-them="dracula">
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
	<h2 id="about" class="text-6xl">About Me</h2>
	<h2 id="publication" class="text-6xl">Publication</h2>
</div>
