import client from "$lib/sanity/client";

const deleteMenuItem = async (id: any) => {
    try {
      await client.delete(id);
      console.log('Deleted menu item');
    } catch (error) {
      console.error('Error deleting menu item:', error);
    }
  };
  
  let menuItemId = 1;
  deleteMenuItem(menuItemId);
  