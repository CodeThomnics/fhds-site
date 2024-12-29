<script>
    /** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
    let { data, children } = $props();
</script>

{#if data.vacancies.length > 0}
<div class="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md intersect-once motion-safe:intersect:motion-preset-blur-down motion-delay-200">
    <h2 class="text-2xl font-bold mb-4">Nieuwe Vacatures Beschikbaar!</h2>
    <p class="text-schakel-black mb-4">We zijn op zoek naar getalenteerde individuen om ons team te versterken. Bekijk onze nieuwste vacatures en solliciteer vandaag nog!</p>
    <a href="/vacatures" class="inline-block bg-primary-500 text-white py-2 px-4 rounded hover:bg-primary-600 transition duration-300" data-sveltekit-preload-data>Bekijk Vacatures</a>
</div>
{/if}

{@render children()}