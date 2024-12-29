import { createClient } from 'contentful';

const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const fetchEntries = async (contentType) => {
    try {
        const entries = await client.getEntries({ content_type: contentType});
        return entries.items;
    } catch (error) {
        console.error('Error fetching Contentful entries:', error);
        return [];
    }
};

export const fetchEntry = async (contentType, id) => {
    try {
        const entry = await client.getEntry(id);
        return entry;
    } catch (error) {
        console.error('Error fetching Contentful entry:', error);
        return null;
    }
}