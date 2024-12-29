<script>
	import SvelteSeo from 'svelte-seo';
	import ballenhuis from '$lib/assets/ballenhuis/ballenhuis.webp?enhanced';

	import deOaverstap1 from '$lib/assets/de-oaverstap/de-oaverstap1.webp?enhanced';
	import deOaverstap2 from '$lib/assets/de-oaverstap/de-oaverstap2.webp?enhanced';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<SvelteSeo
	title="Fasehuizen de Schakel | Ballenhuis"
	description="Ballenhuis is gelegen nabij het centrum van Varsseveld"
/>

<div>
	<h1 class="py-8 text-center text-4xl text-primary-500">Ballenhuis</h1>
	<div class="flex justify-center">
		<enhanced:img class="h-64 w-auto" src={ballenhuis} alt="Ballenhuis"></enhanced:img>
	</div>
	<p class="mx-32 my-8">
		Het huis is gelegen nabij het centrum van
		Varsseveld. Diverse supermarkten en andere winkels zijn gemakkelijk bereikbaar. Evenals het
		treinstation. Aansluitend aan het pand is ons kantoor gevestigd.<br /><br />

		Het ballenhuis biedt 24-uursbegeleiding en heeft ook de meeste begeleidingsdichtheid. Het huis
		heeft ruimte voor 6 jongeren/jongvolwassenen. Zij hebben ruime slaapkamers en gedeelde badkamers
		en een gezamenlijke keuken. Tevens is er een gezamenlijk tuin. In dit huis is tevens een
		slaapdienst aanwezig.
	</p>
	<div class="mt-8 flex items-center justify-center">

	</div>
</div>
