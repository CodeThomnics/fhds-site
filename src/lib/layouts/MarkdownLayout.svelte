<script>
	let { children } = $props();
</script>

<div id="privacy" class="prose prose-lg mx-16 mt-8 max-w-none">
	{@render children()}
</div>

<style scoped>
	#privacy :global(h1) {
		margin-bottom: 1rem;
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 700;
	}

	#privacy :global(h2) {
		margin-bottom: 1rem;
		margin-top: 2rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
	}

	#privacy :global(p) {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	#privacy :global(ul) {
		margin-top: 1rem;
		margin-bottom: 1rem;
		list-style-type: disc;
		list-style-position: inside;
	}

	#privacy :global(a) {
		color: #2563eb;
		text-decoration: underline;
	}

	#privacy :global(a:hover) {
		color: #1d4ed8;
	}

	#privacy :global(code) {
		padding-left: 0.25rem;
		padding-right: 0.25rem;
		border-radius: 0.25rem;
		background-color: #f3f4f6;
	}

	#privacy :global(pre) {
		overflow-x: auto;
		padding: 1rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		border-radius: 0.25rem;
		background-color: #f3f4f6;
	}
</style>
