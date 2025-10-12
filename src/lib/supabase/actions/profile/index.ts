import { supabase } from "$lib/supabase/client";


export const get_address = async (user_id: string) => {
    const { data, error } = await supabase
        .from('addresses')
        .select('*')
        .eq('user_id', user_id);

    if (error) {
        throw new Error(error.message);
    }

    return data;
};


export const get_user_info = async (user_id: string) => {
    const { data, error } = await supabase
        .from('auth_users')
        .select('*')
        .eq('id', user_id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export const create_delivery_user = async (user_id: string) => {
    // Check if the user already exists
    const { data: existingUser, error: checkError } = await supabase
        .from('delivery_users')
        .select('user_id')
        .eq('user_id', user_id)
        .single(); // We expect only one result, so we use .single()

    if (checkError) {
        throw new Error(checkError.message);
    }

    // If the user already exists, just return the existing user data
    if (existingUser) {
        return existingUser;
    }

    // If user doesn't exist, create a new one
    const { data, error } = await supabase
        .from('delivery_users')
        .insert([{ user_id, total_orders: 0, total_spent: 0, loyalty_points: 0, tier: 'A' }])
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
};


export const get_delivery_user = async (user_id: string) => {
    const { data, error } = await supabase
        .from('delivery_users')
        .select('*')
        .eq('user_id', user_id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

const helper_month = (data_string: any) =>{
   return new Date(data_string).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
}

export const get_profile_details = async (user_id: string) => {

    const user_data = await get_user_info(user_id);
    const delivery_data = await get_delivery_user(user_id);

    if(!user_data && !delivery_data){
        throw new Error('User not found');
    }

    const { data: profile_data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user_id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    const profile_data_enriched = {
        full_name: profile_data.full_name,
        email: user_data.email,
        phone: profile_data.phone,
        avatar_url: profile_data.avatar_url,
        member_since: helper_month(user_data.created_at),
        total_orders: delivery_data.total_orders,
        total_spent: delivery_data.total_spent,
        loyalty_points: delivery_data.loyalty_points,
        tier: delivery_data.tier,
    }

    return profile_data_enriched;
}