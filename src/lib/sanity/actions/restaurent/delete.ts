import client from "$lib/sanity/client";

const deleteRestaurantContent = async (id: any) => {
    try {
      await client.delete(id);
      console.log('Deleted restaurant content');
    } catch (error) {
      console.error('Error deleting restaurant content:', error);
    }
  };
  let restaurantContentId=1;
  deleteRestaurantContent(restaurantContentId);
  