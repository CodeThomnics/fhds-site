<script>
	import SvelteSeo from 'svelte-seo';
	import ballenhuis from '$lib/assets/ballenhuis/ballenhuis.webp?enhanced';

	import deOaverstap1 from '$lib/assets/de-oaverstap/de-oaverstap1.webp?enhanced';
	import deOaverstap2 from '$lib/assets/de-oaverstap/de-oaverstap2.webp?enhanced';

	/** @type {{ data: import('./$types').PageData }} */
	let { data } = $props();
</script>

<SvelteSeo
	title="Fasehuizen de Schakel | Villa Schakelbont"
	description=""
/>

<div>
	<h1 class="py-8 text-center text-4xl text-primary-500">Villa Schakelbont</h1>
	<div class="flex justify-center">
		<enhanced:img class="h-64 w-auto" src={ballenhuis} alt="Ballenhuis"></enhanced:img>
	</div>
	<p class="mx-32 my-8">
		
	</p>
	<div class="mt-8 flex items-center justify-center">
	</div>
</div>
