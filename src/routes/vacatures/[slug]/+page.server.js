import { fetchEntries, fetchEntry } from '$lib/contentful';

export const ssr = true; 

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const fetchedVacanies = await fetchEntries('vacancy');
    const vacancy = fetchedVacanies.find((vacancy) => vacancy.fields.slug === params.slug);

    const currentVacancy = await fetchEntry('vacancy', vacancy.sys.id);

    return { vacancy: currentVacancy };
}