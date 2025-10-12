import { createClient } from '@sanity/client';

const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    token: process.env.SANITY_API_TOKEN,
});

export default client;
