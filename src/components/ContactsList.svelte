<script lang="ts">
	import type { Contacts } from './constants';
	import { contacts } from './constants';
</script>

<div class="fixed bottom-48 left-20">
	<div class="flex flex-col rounded-xl">
		{#each contacts as contact}
			<div class="flex-1 py-4">
				<a href={contact.link} target={contact.behavior}
					><img
						class="hover:scale-125 ease-in-out duration-300"
						src={contact.icon}
						alt={contact.name}
						title={contact.name}
						height="60"
						width="60"
					/></a
				>
			</div>
		{/each}
	</div>
</div>
