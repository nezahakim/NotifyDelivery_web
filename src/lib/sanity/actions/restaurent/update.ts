import client from "$lib/sanity/client";

const updateRestaurantContent = async (id: any, updateData: any) => {
    try {
      const updatedContent = await client.patch(id)
        .set(updateData)
        .commit();
      console.log('Updated restaurant content:', updatedContent);
      return updatedContent;
    } catch (error) {
      console.error('Error updating restaurant content:', error);
    }
  };
  
  const updateContentData = { description: 'Updated marketing blurb' };
  let restaurantContentId = 1;

  updateRestaurantContent(restaurantContentId, updateContentData);
  