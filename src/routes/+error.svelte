<script>
    import { page } from '$app/stores';
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center p-8 bg-white rounded-lg shadow-xl max-w-md w-full">
        <h1 class="text-6xl font-bold text-red-500 mb-4">
            {$page.status}
        </h1>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            {$page.error?.message || 'Een fout is opgetreden'}
        </h2>
        <p class="text-gray-600 mb-8">
            {#if $page.status === 404}
                De pagina die je zoekt bestaat niet.
            {:else if $page.status === 403}
                Je hebt geen toegang tot deze pagina.
            {:else if $page.status === 500}
                Server fout. Probeer het opnieuw.
            {:else}
                Er ging iets mis. Probeer het opnieuw.
            {/if}
        </p>
        <a 
            href="/"
            class="inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200"
        >
            Naar de homepagina
        </a>
    </div>
</div>