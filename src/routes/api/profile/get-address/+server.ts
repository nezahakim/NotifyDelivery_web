import { get_address } from "$lib/supabase/actions/profile";
import { json, type RequestHandler } from "@sveltejs/kit";


export const POST: RequestHandler = async ({ request, locals }) => {
    try {
        const { user_id } = await request.json();

        if ( !user_id ) {
            return json({ error: 'User ID is required' }, { status: 400 })
        }

        const data = await get_address(user_id)
        return json({ addresses: data }, { status: 200 })

    } catch (err) {
        return json({ error: 'Internal Server Error' }, { status: 500 });
    }
};