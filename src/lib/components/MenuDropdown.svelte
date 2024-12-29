<script>
	let { title = '', links = [] } = $props();
	let isOpen = $state(false);

	function handleKeydown(event) {
		if (event.key === 'Enter' || event.key === ' ') {
			isOpen = !isOpen;
		} else if (event.key === 'Escape') {
			isOpen = false;
		} else if (event.key === 'ArrowDown' && isOpen) {
			const firstLink = event.currentTarget.nextElementSibling.querySelector('a');
			firstLink && firstLink.focus();
		}
	}

	function handleLinkKeydown(event, index) {
		if (event.key === 'ArrowDown') {
			const nextLink = event.currentTarget.nextElementSibling;
			nextLink ? nextLink.focus() : event.currentTarget.parentElement.firstElementChild.focus();
		} else if (event.key === 'ArrowUp') {
			const prevLink = event.currentTarget.previousElementSibling;
			prevLink ? prevLink.focus() : event.currentTarget.parentElement.lastElementChild.focus();
		} else if (event.key === 'Escape') {
			isOpen = false;
			event.currentTarget.closest('div[role="navigation"]').querySelector('button').focus();
		}
	}
</script>

<div
	role="navigation"
	class="group relative hover:motion-preset-fade"
	onmouseenter={() => (isOpen = true)}
	onmouseleave={() => (isOpen = false)}
	onfocusin={() => (isOpen = true)}
	onfocusout={() => (isOpen = false)}
	tabindex="-1"
>
	<button
		aria-expanded={isOpen ? 'true' : 'false'}
		aria-haspopup="true"
		type="button"
		class="rounded-md px-3 py-2 text-sm font-medium text-schakel-black hover:text-primary-500"
		onkeydown={handleKeydown}
	>
		{title}
	</button>
	{#if isOpen}
		<!-- Only show dropdown when isOpen is true -->
		<div role="menu" class="absolute left-0 w-48 rounded-md border border-gray-200 bg-white shadow-lg">
			{#each links as { href, label }, index}
				<!-- Loop through the list of links -->
				<a
					{href}
					aria-label={label}
					class="block px-4 py-2 text-sm text-schakel-black hover:text-primary-500"
					tabindex="0"
					data-sveltekit-preload-data
					onkeydown={(event) => handleLinkKeydown(event, index)}
				>
					{label}
				</a>
			{/each}
		</div>
	{/if}
</div>
