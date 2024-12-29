<script>
	import SvelteSeo from 'svelte-seo';
	import Carousel from '$lib/components/Carousel.svelte';
	import hooghuis from '$lib/assets/hooghuis/Hooghuis.webp?enhanced';

	import HooghuisKeuken from '$lib/assets/hooghuis/Hooghuis-keuken.webp?enhanced';
	import HooghuisWoonkamer from '$lib/assets/hooghuis/Hooghuis-woonkamer.webp?enhanced';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<SvelteSeo
	title="Fasehuizen de Schakel | Hooghuis"
	description="Het Hooghuis is gelegen in het centrum van Varsseveld."
/>

<div>
	<h1 class="py-8 text-center text-4xl text-primary-500">Hooghuis</h1>
	<div class="flex justify-center">
		<enhanced:img class="h-64 w-auto" src={hooghuis} alt="Hooghuis"></enhanced:img>
	</div>
	<p class="mx-32 my-8">
		Het Hooghuis is gelegen in het centrum van Varsseveld. Eerder was hier ons kantoor te vinden.
		Deze ruimte is momenteel leeg. De woning heeft een appartement op de begane grond voorzien van
		een eigen badkamer en keuken. Op de bovenverdieping is een ruime woning voor 3 jongeren bestemd.
		Hierbij wordt evenals bij het Ballenhuis de jongeren dagelijks voorzien van begeleiding en
		kunnen zij 24 uur beroep doen op de begeleiding. Daarnaast zijn er wekelijks individuele
		contactmomenten met de persoonlijk begeleider. Daarnaast is er een slaap-waakdienst aanwezig.
	</p>
	<div class="flex justify-center">
		<div class="w-1/2">
            <Carousel
			items={[
				{ src: HooghuisKeuken, alt: 'Keuken' },
				{ src: HooghuisWoonkamer, alt: 'Woonkamer' }
			]}
		></Carousel>
        </div>
	</div>
</div>
