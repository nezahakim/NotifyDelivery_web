import { get_profile_details } from "$lib/supabase/actions/profile";
import { json, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request, locals }) => { 
    try{

        const { user_id } = await request.json();

        if ( !user_id ) {
            console.log("UNAUTHORIZED ACTION DEL_ERROR_UID")
            return json({ error: 'User ID is required' }, { status: 400 })
        }

        const data  = await get_profile_details(user_id);
        return json({ data }, { status: 200 });
    
    } catch (err: any){
        console.log("Internal Server Error DEL_ERROR_GUD", err)
        return json({ error: 'Internal Server Error' }, { status: 500 });
    }

}

