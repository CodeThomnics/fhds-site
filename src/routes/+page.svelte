<script>
	import SvelteSeo from 'svelte-seo';
	import voorpagina from '$lib/assets/fhds-voorpagina.webp';
	import Carousel from '$lib/components/Carousel.svelte';
	import gemeenteAalten from '$lib/assets/gemeentes/gemeente-aalten.webp?enhanced';
	import gemeenteDoetinchem from '$lib/assets/gemeentes/gemeente-doetinchem.webp?enhanced';
	import gemeenteWinterswijk from '$lib/assets/gemeentes/gemeente-winterswijk.webp?enhanced';
	import gemeenteBerkelland from '$lib/assets/gemeentes/gemeente-berkelland.webp?enhanced';
	import gemeenteBronckhorst from '$lib/assets/gemeentes/gemeente-bronckhorst.webp?enhanced';
	import gemeenteMontferland from '$lib/assets/gemeentes/gemeente-montferland.webp?enhanced';
	import gemeenteOostGelre from '$lib/assets/gemeentes/gemeente-oost-gelre.webp?enhanced';
	import gemeenteOudeIjsselstreek from '$lib/assets/gemeentes/gemeente-oude-ijsselstreek.webp?enhanced';

	const gemeentes = [
		{ src: gemeenteOudeIjsselstreek, aria: 'Gemeente Oude Ijsselstreek' },
		{ src: gemeenteAalten, aria: 'Gemeente Aalten' },
		{ src: gemeenteDoetinchem, aria: 'Gemeente Doetinchem' },
		{ src: gemeenteWinterswijk, aria: 'Gemeente Winterswijk' },
		{ src: gemeenteBerkelland, aria: 'Gemeente Berkelland' },
		{ src: gemeenteMontferland, aria: 'Gemeente Montferland' },
		{ src: gemeenteOostGelre, aria: 'Gemeente Oost Gelre' },
		{ src: gemeenteBronckhorst, aria: 'Gemeente Bronckhorst' }
	];

	let { data } = $props();
</script>

<SvelteSeo
	title="Fasehuizen de Schakel | Meer dan alleen begeleiding"
	description="Fasehuizen de Schakel is een zorginstelling voor (jong)volwassenen met alle pijlen gericht op het ontwikkelen van zelfredzaamheid."
/>

<!-- Snippet to display the availability of places in a house -->
{#snippet housePlacesAvailable(house, places)}
	<div class=" mb-6 rounded-lg border border-gray-300 p-6 shadow-lg motion-safe:transition-transform hover:scale-105">
		<h3 class="text-2xl font-bold text-schakel-black mb-2">{house}</h3>
		<p class="text-lg text-gray-700">
			{#if places === 0}
				Geen plekken beschikbaar
			{:else if places === 1}
				1 plek beschikbaar
			{:else}
				{places} plekken beschikbaar
			{/if}
		</p>
	</div>
{/snippet}

<div
	class="h-screen max-h-[500px] bg-cover bg-center"
	style="background-image: url('{voorpagina}');"
>
	<div class="block h-full bg-schakel-black bg-opacity-60">
		<div class="flex flex-col h-full items-center justify-center motion-safe:animate-flip-in-x">
			<h1 class="text-5xl text-white md:text-6xl">
				Fasehuizen <span class="text-primary-500">de Schakel</span>
			</h1>
			<p class="text-lg text-white md:text-xl">
				Meer dan alleen begeleiding, meedoen doen wij samen!<br />
			</p>
		</div>
	</div>
</div>
<div class="intersect-once motion-safe:intersect:motion-preset-fade">
	<p class="px-20 my-12 text-schakel-black">
		Fasehuizen de Schakel is een groeiende zorgonderneming gelegen in Varsseveld. De Schakel richt
		zich op jongeren en (jong)volwassenen met uiteenlopende problematiek. Alle pijlen zijn gericht
		op het ontwikkelen van een zo groot mogelijke zelfredzaamheid. De Schakel beschikt over 4
		woningen gelegen in het centrum van Varsseveld, Terborg en Silvolde. Naast woonbegeleiding biedt
		de Schakel ook ambulante begeleiding en dagbesteding.<br /><br />
		”Ons doel is om jou een vertrouwde en veilige omgeving te bieden waarin jij op je eigen tempo en
		binnen je mogelijkheden kan werken aan een zo zelfstandig mogelijk bestaan”.
	</p>
</div>
<div class="intersect-once motion-safe:intersect:motion-preset-slide-up">
	<h1 class="text-center text-2xl font-semibold text-schakel-black intersect:animate-fade-up">
		Gemeenten met wie wij samenwerken:
	</h1>
	<div class="mt-8 flex justify-center">
		<div class="w-1/2">
			<Carousel items={gemeentes} duration={4000} />
		</div>
	</div>
</div>
<div class="px-20 py-10 intersect-once motion-safe:intersect:motion-preset-slide-up">
	<h2 class="mb-8 ml-4 text-2xl font-semibold text-schakel-black">Open plekken beschermd wonen</h2>
	{#if data.places.length === 0}
		<p class="text-lg text-red-500">Geen plekken beschikbaar</p>
	{:else}
		{#each data.places as place}
			{@render housePlacesAvailable(place.fields.house, place.fields.places)}
		{/each}
	{/if}
</div>
