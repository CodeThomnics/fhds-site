<script>
	import SvelteSeo from 'svelte-seo';
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<SvelteSeo
	title="Fasehuizen de Schakel | Vacature {data.vacancy.fields.title}"
	description={data.vacancy.fields.shortDescription}
/>

<div id="vacancy" class="container mx-auto p-6">
	{@html documentToHtmlString(data.vacancy.fields.description)}
</div>

<style scoped>
	#vacancy :global(h1) {
		margin-bottom: 1rem;
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 700;
	}
	#vacancy :global(p) {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	#vacancy :global(a) {
		color: #2563eb;
		text-decoration: underline;
	}

	#vacancy :global(a:hover) {
		color: #1e40af;
	}
	#vacancy :global(ul) {
		margin-bottom: 1rem;
		list-style-type: disc;
	}
</style>
