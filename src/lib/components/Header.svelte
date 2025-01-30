<script>
	import { slide } from 'svelte/transition';
	import logo from '$lib/assets/logo-fhds.webp?enhanced';
	import MenuDropdown from '$lib/components/MenuDropdown.svelte';
	import MobileMenuDropdown from '$lib/components/MobileMenuDropdown.svelte';
	import { afterNavigate } from '$app/navigation';

	// States for mobile dropdowns
	let mobileDropdownVisible = $state(false);
	let mobileOverOnsDropdownVisible = $state(false);
	let mobileLocatiesDropdownVisible = $state(false);
	let mobileDagbestedingDropdownVisible = $state(false);

	// Toggles for mobile dropdowns
	function toggleMobileDropdown() {
		mobileDropdownVisible = !mobileDropdownVisible;
	}
	function toggleMobileOverOnsDropdown() {
		mobileOverOnsDropdownVisible = !mobileOverOnsDropdownVisible;
	}
	function toggleMobileLocatiesDropdown() {
		mobileLocatiesDropdownVisible = !mobileLocatiesDropdownVisible;
	}
	function toggleMobileDagbestedingDropdown() {
		mobileDagbestedingDropdownVisible = !mobileDagbestedingDropdownVisible;
	}

	function resetHeaderState() {
		mobileDropdownVisible = false;
		mobileOverOnsDropdownVisible = false;
		mobileLocatiesDropdownVisible = false;
		mobileDagbestedingDropdownVisible = false;
	}

	afterNavigate(() => resetHeaderState());
</script>

<nav class="bg-white shadow-lg relative z-50">
	<div class="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo and Desktop Navigation -->
			<div class="flex items-center">
				<a href="/" class="text-xl font-bold text-gray-800" aria-label="Home">
					<enhanced:img src={logo} class="h-16 w-36" alt="Logo" />
				</a>
				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-4">
						<!-- Dropdown for Over ons -->
						<MenuDropdown
							title="Over Ons"
							links={[
								{ href: '/over-ons/missie-visie-werkwijze', label: 'Missie, visie en werkwijze' },
								{ href: '/over-ons/team-fasehuizen', label: 'Team Fasehuizen' }
							]}
						/>
						<MenuDropdown
							title="Locaties"
							links={[
								{ href: '/locaties/ballenhuis', label: 'Ballenhuis' },
								{ href: '/locaties/hooghuis', label: 'Hooghuis' },
								{ href: '/locaties/de-oaverstap', label: 'De Oaverstap' },
								{ href: '/locaties/villa-schakelbont', label: 'Villa Schakelbont' }
							]}
						/>
						<MenuDropdown
							title="Dagbesteding"
							links={[
								{ href: '/dagbesteding/the-bokx', label: 'The Bokx' },
								{ href: '/dagbesteding/amadonna', label: 'Amadonna' }
							]}
						/>

						<!-- Additional Links -->
						<a
							href="/ambulant"
							aria-label="Ambulant"
							class="rounded-md px-3 py-2 text-sm font-medium text-schakel-black hover:text-primary-500"
							>Ambulant</a
						>
						<a
							href="/contact"
							aria-label="Contact"
							class="rounded-md px-3 py-2 text-sm font-medium text-schakel-black hover:text-primary-500"
							>Contact</a
						>
					</div>
				</div>
			</div>

			<!-- Mobile Menu Button -->
			<div
				role="button"
				tabindex="0"
				class="-mr-2 flex md:hidden"
				onclick={toggleMobileDropdown}
				onkeydown={(e) => {
					if (e.key === 'Enter') {
						e.preventDefault();
						toggleMobileDropdown();
					}
				}}
			>
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md bg-white p-2 text-primary-500 hover:bg-primary-500 hover:text-white focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileDropdownVisible}
		<div in:slide={{ duration: 300}} out:slide={{ duration: 200}} class="md:hidden">
			<div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
				<!-- Mobile Dropdown for Over Ons -->
				<MobileMenuDropdown title="Over Ons"
				links={[
					{ href: '/over-ons/missie-visie-werkwijze', label: 'Missie, visie en werkwijze' },
					{ href: '/over-ons/team-fasehuizen', label: 'Team Fasehuizen' }
				]}
				visible={mobileOverOnsDropdownVisible}
				toggle={toggleMobileOverOnsDropdown}/>
				
	
				<!-- Mobile Dropdown for Locaties -->
				<MobileMenuDropdown title="Locaties"
				links={[
					{ href: '/locaties/ballenhuis', label: 'Ballenhuis' },
					{ href: '/locaties/hooghuis', label: 'Hooghuis' },
					{ href: '/locaties/de-oaverstap', label: 'De Oaverstap' },
					{ href: '/locaties/villa-schakelbont', label: 'Villa Schakelbont' }
				]}
				visible={mobileLocatiesDropdownVisible}
				toggle={toggleMobileLocatiesDropdown}/>
	
				<!-- Mobile Dropdown for Dagbesteding -->
				<MobileMenuDropdown title="Dagbesteding"
				links={[
					{ href: '/dagbesteding/the-bokx', label: 'The Bokx' },
					{ href: '/dagbesteding/amadonna', label: 'Amadonna' }
				]}
				visible={mobileDagbestedingDropdownVisible}
				toggle={toggleMobileDagbestedingDropdown}/>

				<a
					href="/ambulant"
					aria-label="Ambulant"
					class="block rounded-md px-3 py-2 text-base font-medium text-schakel-black hover:text-primary-500"
					>Ambulant</a
				>
	
				<a
					href="/contact"
					aria-label="Contact"
					class="block rounded-md px-3 py-2 text-base font-medium text-schakel-black hover:text-primary-500"
					>Contact</a
				>
			</div>
		</div>
	{/if}
</nav>
