import { supabase } from "$lib/supabase/client";

  
export const update_address_as_default = async (address_id: any, user_id: any) => {

    await supabase
      .from('addresses')
      .update({ is_default: false })
      .eq('user_id', user_id)
      .eq('is_default', true);  // Unset any previous default
  
    const { data, error } = await supabase
      .from('addresses')
      .update({ is_default: true })
      .eq('id', address_id)
      .eq('user_id', user_id);
  
    if (error) {
      throw new Error(error.message);
    } else {
     return{
        status: true,
        message: 'Address updated as default successfully',
        data: data
     }
    }
  };
  