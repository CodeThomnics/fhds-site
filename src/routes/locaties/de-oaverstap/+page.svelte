<script>
	import SvelteSeo from 'svelte-seo';
	import Carousel from '$lib/components/Carousel.svelte';
	import deOaverstap from '$lib/assets/de-oaverstap/de-oaverstap.webp?enhanced';

	import deOaverstap1 from '$lib/assets/de-oaverstap/de-oaverstap1.webp?enhanced';
	import deOaverstap2 from '$lib/assets/de-oaverstap/de-oaverstap2.webp?enhanced';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<SvelteSeo
	title="Fasehuizen de Schakel | De Oaverstap"
	description="In Terborg hebben wij onze locatie ‘De Overstap’ gevestigd."
/>

<div>
	<h1 class="py-8 text-center text-4xl text-primary-500">De Oaverstap</h1>
	<div class="flex justify-center">
		<enhanced:img class="h-64 w-auto" src={deOaverstap} alt="De Oavertap"></enhanced:img>
	</div>
	<p class="mx-32 my-8">
		In Terborg hebben wij onze locatie ‘De Oaverstap’ gevestigd. De fase waarbij de focus ligt op
		meer zelfstandigheid en het klaarstomen voor de volgende stap, namelijk het op jezelf gaan wonen
		met ambulante ondersteuning.<br /><br />
		De Oaverstap bevindt zich op een bedrijventerrein. Diverse supermarkten en andere winkels zijn gemakkelijk
		bereikbaar. Evenals het treinstation.<br /><br />
		Bij de Oaverstap wonen vijf (jong)volwassenen. Allen hebben ze hun eigen woon-en slaapkamer. Er zijn
		twee badkamers in het pand aanwezig. De vrouwelijke bewoners delen samen een badkamer, evenals de
		mannelijke bewoners.<br /><br />
		Er is een gezamenlijke keuken waar de bewoners om en om één keer per week een maaltijd koken voor
		de groep samen met een begeleider. De andere dagen bereiden de bewoners ieder voor zich een maaltijd.<br
		/><br />
		Tevens is er een gezamenlijk dakterras aanwezig en twee kamers beschikken over een eigen dakterras.<br
		/><br />
		Iedere bewoner heeft één of twee vaste begeleiders waarmee hij/zij één a tweewekelijkse begeleidingsmomenten
		plant. Daarnaast krijgen alle bewoners één keer per week ondersteuning van een huishoudelijke hulp
		voor het uitvoeren van de gezamenlijke taken. Buiten de vaste ondersteuningsmomenten om komt er vaak
		op andere dagen doordeweeks of in het weekend een begeleider langs om even een praatje te maken of
		een kop koffie te drinken wanneer hier behoefte aan is.<br /><br />
		24 uur per dag is er een bereikbaarheidsdienst oproepbaar voor de bewoners.
	</p>
	<div class="flex justify-center">
		<div class="w-1/2">
            <Carousel
			items={[
				{ src: deOaverstap1, alt: 'De Oaverstap 1' },
				{ src: deOaverstap2, alt: 'De Oaverstap 2' }
			]}
		></Carousel>
        </div>
	</div>
</div>
