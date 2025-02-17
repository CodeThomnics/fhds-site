<script>
	import SvelteSeo from 'svelte-seo';
	import ColleagueCard from "$lib/components/ColleagueCard.svelte";

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<SvelteSeo
	title="Fasehuizen de Schakel | Team Fasehuizen"
	description="Het team bestaat uit een gezellige, enthousiaste professionals met ieder zijn eigen kwaliteiten door de diversiteit aan kennis en ervaring."
/>

<div>
	<h1 class="mt-8 text-center text-4xl text-primary-500">
		Maak kennis met Team Fasehuizen de Schakel!
	</h1>
	<p class="mx-8 mt-4 text-center text-schakel-black">
		Fasehuizen de Schakel bestaat uit een gezellig team, enthousiaste professionals met ieder zijn
		eigen kwaliteiten.<br />Door de diversiteit aan kennis en ervaring kunnen wij veel van elkaar
		leren en staan we nooit alleen.
	</p>
	<p class="font-semibold text-center mt-4 uppercase">“Meedoen doen wij samen!”</p>
	<div class="max-full grid grid-cols-1 md:gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mx-8 md:mx-8 place-items-center">
		{#each data.colleagues as colleague}
			<ColleagueCard firstname={colleague.fields.firstname} roles={colleague.fields.role} url="https:{colleague.fields.image.fields.file.url}"/>
		{/each}
	</div>
	
</div>
