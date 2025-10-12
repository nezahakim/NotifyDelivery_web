import client from "$lib/sanity/client";

const updateMenuItem = async (id: any, updateData: { price: number; }) => {
    try {
      const updatedMenuItem = await client.patch(id)
        .set(updateData) // Applying the changes
        .commit(); // Committing the patch to the document
      console.log('Updated menu item:', updatedMenuItem);
      return updatedMenuItem;
    } catch (error) {
      console.error('Error updating menu item:', error);
    }
  };
  
  const updateData = { price: 14.99 }; // Updating price
  let menuItemId = 1
  updateMenuItem(menuItemId, updateData);
  