import { fetchEntries } from '$lib/contentful';
import { error } from '@sveltejs/kit';

const sortOrder = {
    "Directeur": 1,
    "Bedenker en oprichter": 2,
    "Beleidskwaliteitcoördinator": 3,
    "Coördinator Wonen": 4,
    "Coördinator Ambulant": 5,
    "Coördinator Dagbesteding": 6,
    "Persoonlijk begeleider": 7,
    "Ambulant begeleider": 8,
    "Activiteitenbegeleider": 9,
    "Office Manager": 10,
    "Gastvrouw": 11
};

// Helper function to get the highest priority role for an object
function getHighestPriorityRole(roles) {
    if (!Array.isArray(roles)) return roles; // Ensure roles is always an array
    if (roles.length === 1) return roles[0]; // If there's only one role, return it
    return roles.reduce((highest, role) => {
        const currentPriority = sortOrder[role] || Infinity;
        const highestPriority = sortOrder[highest] || Infinity;
        return currentPriority < highestPriority ? role : highest;
    }, roles[0]);
}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    try {
        const fetchedColleagues = await fetchEntries('collegue');

        let colleagues = fetchedColleagues.sort((a, b) => {
            const priorityA = sortOrder[getHighestPriorityRole(a.fields.role)] || Infinity;
            const priorityB = sortOrder[getHighestPriorityRole(b.fields.role)] || Infinity;
            return priorityA - priorityB;
        });

        return { colleagues };
    } catch (err) {
        console.error('Error fetching colleagues:', err);
        throw error(500, 'Failed to fetch colleagues');
    }
}