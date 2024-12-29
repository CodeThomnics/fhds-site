<script>
	import { slide } from 'svelte/transition';
	let { title = '', links = [], visible = false, toggle } = $props();
</script>

<div>
	<button
		onclick={toggle}
		class="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-schakel-black hover:text-primary-500 focus:outline-none"
	>
		{title}
	</button>
	{#if visible}
		<div class="space-y-1 pl-4" in:slide={{ duration: 300 }} out:slide={{ duration: 300 }}>
			{#each links as { href, label }, index}
				<!-- Loop through the list of links -->
				<a
					{href}
					alria-label={label}
					class="block px-3 py-1 text-sm text-schakel-black hover:text-primary-500"
					data-sveltekit-preload-data
				>
					{label}
				</a>
			{/each}
		</div>
	{/if}
</div>
