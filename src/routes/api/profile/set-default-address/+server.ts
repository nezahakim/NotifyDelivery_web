import { json, type RequestHandler } from "@sveltejs/kit";
import { update_address_as_default } from "$lib/supabase/actions/profile/address";

export const POST: RequestHandler = async ({ request, locals }) =>{
    try{
        const { user_id, address_id } = await request.json();

        if ( !user_id || !address_id ) {
            return json({ error: 'ID and ID are required' }, { status: 400 })
        }

        const data = await update_address_as_default(address_id, user_id);

        if(!data){
            return json({ error: 'Failed to update address as default' }, { status: 500 });
        }

        return json({ data }, { status: 200 });
    } catch(err: any){
        console.log(err)
        return json({ error: 'Internal Server Error' }, { status: 500 });
    }
}