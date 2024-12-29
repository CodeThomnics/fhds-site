import { fetchEntries } from '$lib/contentful';

 
/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const fetchedVacanies = await fetchEntries('vacancy');

    return { vacancies: fetchedVacanies };
}