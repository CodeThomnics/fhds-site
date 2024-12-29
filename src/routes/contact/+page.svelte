<script>
    import SvelteSeo from 'svelte-seo';
    import intakeFormulier from '$lib/assets/Intake-formulier-Fasehuizen-De-Schakel.pdf'
	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<SvelteSeo
	title="Fasehuizen de Schakel | Contact"
	description="Neem contact op met Fasehuizen de Schakel voor meer informatie over onze dienstverlening."
/>

<div class="container mx-auto p-6">
    <h1 class="md:text-4xl text-3xl font-bold mb-6 text-center">Geïnteresseerd in onze dienstverlening?</h1>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 class="text-2xl font-bold mb-4">Neem contact met ons op</h2>
        <div class="mb-4">
            <h3 class="text-xl font-semibold">Telefoonummer</h3>
            <a href="tel:+31642283744" class="text-primary-500 hover:underline">0642283744</a>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-semibold">Email</h3>
            <a href="mailto:info@fhds.nl" class="text-primary-500 hover:underline">info@fhds.nl</a>
        </div>
        <div class="mb-4">
            <h3 class="text-xl font-semibold">Adres</h3>
            <p class="text-gray-700">Dames Jolinkweg 11<br/> 7051 DG Varsseveld</p>
        </div>
    </div>
    <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-bold mb-4">Direct inschrijven?</h2>
        <span>Download direct het <a href={intakeFormulier} class="text-primary-500 hover:underline">Intake formulier Fasehuizen De Schakel</a> en stuur deze mee in de mail</span>
    </div>
</div>