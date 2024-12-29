import { fetchEntries } from '$lib/contentful';

export const ssr = true;

export async function load() {
    const fetchedVacancies = await fetchEntries('vacancy'); // Fetch vacancies for the job announcement

    return { vacancies: fetchedVacancies };
}