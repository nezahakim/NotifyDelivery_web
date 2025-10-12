import client from "$lib/sanity/client";

const fetchMenuItem = async (id: any) => {
    try {
      const menuItem = await client.getDocument(id); // Fetching a single document
      console.log('Fetched menu item:', menuItem);
      return menuItem;
    } catch (error) {
      console.error('Error fetching menu item:', error);
    }
  };
  
  const menuItemId = 'menuItem-id-123'; // Example menu item ID
  fetchMenuItem(menuItemId);
  