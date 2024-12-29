<script>
	import SvelteSeo from 'svelte-seo';
	import Carousel from '$lib/components/Carousel.svelte';
	import amadonnaStallen from '$lib/assets/amadonna/amadonna-stallen.webp?enhanced';
	import amadonnaGeboorte from '$lib/assets/amadonna/amadonna-geboorte.webp?enhanced';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<SvelteSeo
	title="Fasehuizen de Schakel | Amadonna"
	description="Midden in het serene buitengebied van Loerbeek biedt Amadonna een unieke dagbesteding voor drie
		à vier dagen per week."
/>
<div>
	<h1 class="py-8 text-center text-4xl text-primary-500">Amadonna</h1>

	<p class="mx-8">
		Midden in het serene buitengebied van Loerbeek biedt Amadonna een unieke dagbesteding voor drie
		à vier dagen per week. Bij ons staan structuur, ritme en een warme, persoonlijke benadering
		centraal. Omringd door paarden, kleindieren en creatieve activiteiten vinden onze deelnemers
		rust, verbinding en inspiratie.<br /><br />

		Bij Amadonna draait alles om vertrouwen, respect en samen groeien. We hechten veel waarde aan
		een omgeving waarin iedereen zich gehoord en begrepen voelt. We moedigen elkaar aan om
		uitdagingen aan te gaan en ontdekken samen ieders unieke kwaliteiten, zodat deze optimaal
		ingezet en verder ontwikkeld kunnen worden.<br /><br />

		Dagelijks werken we met onze paarden, maken we fijne wandelingen met de honden en beleven we
		creatieve momenten met bloemen en hout. Daarnaast verzorgen we met liefde onze dieren. Deze
		activiteiten brengen niet alleen structuur, maar vooral ook vreugde – een glimlach op elk
		gezicht, dag in dag uit.
	</p>

	<div class="mx-8 mt-8">
		<h2 class="text-lg font-semibold text-schakel-black">Openingstijden dagbesteding Amadonna:</h2>
		<p>Dinsdag, donderdag, vrijdag en om de week op zaterdag.</p>
	</div>
	<div class="mx-8 mt-8">
		<p>
			Aanmelden kan <a
				href="mailto:info@fhds.nl?subject=Aanmelding Dagbesteding"
				class="text-primary-500 hover:underline">via de mail hier</a
			>.
		</p>
	</div>
	<div class="mt-8 flex justify-center">
		<div class="w-1/2">
			<Carousel
				items={[
					{ src: amadonnaStallen, aria: 'Amadonna Stallen' },
					{ src: amadonnaGeboorte, aria: 'Amadonna Geboorte' }
				]}
			/>
		</div>
	</div>
</div>
