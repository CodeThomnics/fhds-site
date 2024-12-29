<script>
    import SvelteSeo from 'svelte-seo';
    /** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
    let { data, children } = $props();
</script>

<SvelteSeo
	title="Fasehuizen de Schakel | Privacyverklaring"
	description="In deze privacyverklaring leest u welke persoonsgegevens wij verzamelen, gebruiken en met welk doel."
/>

{@render children()}
