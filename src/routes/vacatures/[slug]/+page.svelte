<script>
    import SvelteSeo from 'svelte-seo';
    import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
</script>

<SvelteSeo
	title="Fasehuizen de Schakel | Vacature {data.vacancy.fields.title}"
	description={data.vacancy.fields.shortDescription}
/>

<div id="vacancy" class="container mx-auto p-6">
    {@html documentToHtmlString(data.vacancy.fields.description)}
</div>

<style lang="postcss" scoped>
    #vacancy :global(h1) {
        @apply text-3xl font-bold mb-4;
    }
    #vacancy :global(p) {
        @apply text-schakel-black my-2;
    }

    #vacancy :global(a) {
        @apply text-blue-600 hover:text-blue-800 underline;
    }
    #vacancy :global(ul) {
        @apply list-disc mb-4;
    }
</style>