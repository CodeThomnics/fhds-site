<script>
	import logo from '$lib/assets/logo-fhds.webp?enhanced';
	import sbb from '$lib/assets/sbb-beeldmerk.webp?enhanced';
	import iso from '$lib/assets/ISO.svg';
	import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
	import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
	import Icon from 'svelte-awesome';
</script>

<footer class="bg-white py-10 text-schakel-black">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<!-- Logo & Quote -->
			<div>
				<!-- Logo -->
				<enhanced:img loading="lazy" class="h-18 w-full max-w-[200px] object-contain" src={logo} alt="Logo" />
				<!-- Quote -->
				<p class="italic text-schakel-black">"Meer dan alleen begeleiding, meedoen doen wij samen!"</p>
				
				<!-- Quality Marks -->
				<div class="mt-6">
					<h1 class="text-lg font-bold mb-4">Onze keurmerken</h1>
					<div class="flex flex-wrap gap-4 items-center justify-start">
						<img loading="lazy" class="h-16 w-16" src={iso} alt="ISO gecertificeerd" />
						<enhanced:img loading="lazy" class="h-16 w-16" src={sbb} alt="SBB" />
					</div>
				  </div>
			</div>
			<!-- Contact Info -->
			<div>
				<h1 class="mb-4 text-lg font-bold">Contact</h1>
				<ul class="space-y-2">
					<li class="text-schakel-black">
						<span class="font-semibold">Telefoon: </span>
						<a class="hover:text-primary-500 hover:underline" href="tel:+31642283744"
							>0642283744</a
						>
					</li>
					<li class="text-schakel-black">
						<span class="font-semibold">Email:</span>
						<a class="hover:text-primary-500 hover:underline" href="mailto:info@fhds.nl"
							>info@fhds.nl</a
						>
					</li>
				</ul>
			</div>

			<!-- Address -->
			<div>
				<h1 class="mb-4 text-lg font-bold">Adres</h1>
				<p class="text-schakel-black">
					Dames Jolinkweg 11<br />
					7051 DG Varsseveld
				</p>
			</div>

			<!-- Social Media Links -->
			<div>
				<h1 class="mb-4 text-lg font-bold">Volg ons</h1>
				<div class="flex space-x-4">
					<!-- Facebook -->
					<a href="https://www.facebook.com/fhds.nl" class="text-schakel-black hover:text-primary-500" aria-label="Facebook">
						<Icon data={faFacebook} scale="1.5" />
					</a>
					
					<!-- Instagram -->
					<a
						href="https://www.instagram.com/fasehuizendeschakel/"
						class="text-schakel-black hover:text-primary-500"
                        aria-label="Instagram"
					>
						<Icon data={faInstagram} scale="1.5" />
					</a>
				</div>
			</div>
		</div>

		<div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-schakel-black">
			<a href="/vacatures" class="hover:text-primary-500 hover:underline" data-sveltekit-preload-data>Vacatures</a>
			<a href="/over-ons/missie-visie-werkwijze" class="hover:text-primary-500 hover:underline">Over ons</a>
			<!-- <a href="#" class="hover:text-primary-500 hover:underline">FAQ</a> -->
			<a href="/contact" class="hover:text-primary-500 hover:underline">Contact</a>
		  </div>
		<!-- Footer Bottom -->
		<div
			class="mt-8 flex flex-col items-center justify-between border-t border-gray-700 pt-4 text-black md:flex-row"
		>
			<p class="text-sm text-schakel-black">
				© {new Date().getFullYear()} De Schakel Fasehuizen. Alle rechten voorbehouden.
			</p>
			<div class="mt-4 flex space-x-4 md:mt-0 text-schakel-black">
				<a href="/privacy" class="hover:underline" aria-label="Privacy">Privacy</a>
				<a href="#" class="hover:underline" aria-label="Algemene Voorwaarden">Algemene voorwaarden</a>
			</div>
		</div>
	</div>
</footer>
