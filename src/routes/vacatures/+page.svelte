<script>
	import SvelteSeo from 'svelte-seo';
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<SvelteSeo
	title="Fasehuizen de Schakel | Vacatures"
	description="Bekijk hier de vacatures van Fasehuizen de Schakel."
/>

{#snippet vacancyCard(title, shortDescription, slug)}
	<div class="my-4 border border-gray-300 p-4 rounded-lg shadow-md intersect-once motion-safe:intersect:motion-preset-slide-up">
		<h3 class="text-xl font-semibold text-schakel-black">{title}</h3>
		<p class="my-2 text-gray-700">{shortDescription}</p>
		<a
			href="/vacatures/{slug}"
			class="inline-block rounded bg-primary-500 px-4 py-2 text-white hover:bg-primary-700"
			data-sveltekit-preload-data>Solliciteer</a
		>
	</div>
{/snippet}

<div class="container mx-auto p-6">
	<h1 class="mb-6 text-center text-3xl font-bold md:text-4xl">Vacatures</h1>
	<h2 class="text-center text-2xl md:text-3xl">Werken bij De Schakel Fasehuizen</h2>
	<div class="mb-6">
		{#if data.vacancies.length === 0}
			<p class="text-center">Op dit moment hebben wij geen vacatures.</p>
		{:else}
			{#each data.vacancies as vacancy}
				{@render vacancyCard(
					vacancy.fields.title,
					vacancy.fields.shortDescription,
					vacancy.fields.slug
				)}
			{/each}
		{/if}
	</div>
	<div class="text-center">
		<h3 class="text-lg font-bold">Open Sollicitatie</h3>
		<p>Heb je interesse in onze organisatie maar staat jou vacature er niet bij? Stuur ons gerust een open sollicitatie.</p>
	</div>

</div>
