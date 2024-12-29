<script>
    import SvelteSeo from 'svelte-seo';
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<SvelteSeo
	title="Fasehuizen de Schakel | Ambulant"
	description="Woon je zelfstandig thuis, maar kun je wel wat ondersteuning gebruiken? Fasehuizen de Schakel biedt zorg op maat in jouw eigen leefomgeving."
/>

<div class="mt-4 bg-white">
	<h1 class="my-4 text-center text-xl text-primary-500">
		Ambulante ondersteuning bij Fasehuizen de Schakel
	</h1>
	<p class="mx-8 text-start">
		Woon je zelfstandig thuis, maar kun je wel wat ondersteuning gebruiken? Fasehuizen de Schakel
		biedt zorg op maat in jouw eigen leefomgeving.<br />
		Bij de start van de begeleiding wordt er gekeken wat er nodig is aan ondersteuning en wat de mogelijkheden
		zijn.<br />
		De ambulante begeleiding is bij jou thuis op afspraak. We vinden het belangrijk dat er een match
		is tussen jou en de begeleider, zodat je zoveel mogelijk in je eigen kracht komt te staan. Je ontvangt
		begeleiding van één of twee vaste ambulant begeleiders.
	</p>
	<div class="grid grid-cols-1 md:grid-cols-2">
		<div class="mx-8 mt-8">
			<h2 class="font-semibold text-black">Waar kan een ambulant begeleider jou bij helpen?</h2>
			<p>
				Bij een ambulant begeleider kan je je verhaal kwijt. Soms komt er veel op je af en kan je
				ambulant begeleider je helpen om je emoties en gedachten weer even op een rijtje te zetten.
				Dit hoeft niet middels een gesprek aan de keukentafel, jullie kunnen ook samen een wandeling
				maken of een lekker gerecht bereiden.<br /><br />

				Een ambulant hulpverlener kan jou onder andere helpen om (weer) ritme en structuur te
				krijgen in de dag, samen de financiën op orde te krijgen, samen toe te werken naar
				behandeling en nieuwe vaardigheden aan te leren.
			</p>
		</div>
		<div class="mx-8 mt-8">
			<h2 class="font-semibold text-black">Wat doet een ambulant begeleider?</h2>
			<ul class="list-disc">
				<li>Aanbrengen van structuur</li>
				<li>Aanleren en/of behouden van een dagritme</li>
				<li>
					Contact onderhouden met andere instanties, zoals de huisarts, school, werk, dagbesteding,
					behandelpraktijken en bewindvoering
				</li>
				<li>Samen de post doornemen en financiën op orde brengen</li>
				<li>Helpen opbouwen en onderhouden van sociale netwerken</li>
				<li>Het zoeken naar een zinvolle daginvulling</li>
				<li>Het structureren en uitvoeren van huishoudelijke taken</li>
				<li>Reizen met het openbaar vervoer</li>
				<li>Opstarten van behandeling en mee gaan naar een intake en evaluatiegesprek</li>
			</ul>
		</div>
	</div>
    <div class="mt-4 text-center">
        <h2 class="font-semibold text-black">Aanmelden?</h2>
        <p class="lg:mx-56 md:mx-32 mx-16 text-schakel-black">Wil jij je graag aanmelden? Neem dan <a href="mailto:info@fhds.nl?subject=Aanmelding Ambulant" class="text-primary-500 hover:underline">hier via de mail contact op</a>. We plannen dan z.s.m. een kennismakingsgesprek. Wanneer er een match is, kunnen we binnen twee weken/direct starten met de ambulante ondersteuning.</p>
    </div>
</div>
