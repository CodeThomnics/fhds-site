import { fetchEntries } from '$lib/contentful';

export const ssr = true;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const fetchedPlaces = await fetchEntries('place');

	return { places: fetchedPlaces };
}
