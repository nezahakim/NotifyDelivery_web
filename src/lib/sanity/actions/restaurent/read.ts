import client from "$lib/sanity/client";

const fetchRestaurantContent = async (id: string) => {
    try {
      const content = await client.getDocument(id);
      console.log('Fetched restaurant content:', content);
      return content;
    } catch (error) {
      console.error('Error fetching restaurant content:', error);
    }
  };
  
  const restaurantContentId = 'restaurantContent-id-123';
  fetchRestaurantContent(restaurantContentId);
  