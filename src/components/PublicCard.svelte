<script lang="ts">
	import type { Papers } from './constants';
	export let paper: Papers;
</script>

<div class="flex justify-center py-10">
	<div
		class="card w-50 bg-slate-600 shadow-xl border-solid border-2 border-accent hover:scale-105 ease-in duration-300"
	>
		<div class="card-body">
			<h2 class="card-title text-2xl text-accent-focus">{paper.title}</h2>
			<p class="text-lg"><b>Proceedinds:</b> {paper.proceedings}</p>
			<p class="text-lg"><b>Published Date:</b> {paper.publishedDate}</p>
			<div class="card-actions justify-end">
				<a class="btn btn-secondary" href={paper.link}> Details </a>
			</div>
		</div>
	</div>
</div>
