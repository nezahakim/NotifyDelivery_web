import client from "$lib/sanity/client";

export const createMenuItem = async (menuItemData: any) => {
    try {
      const newMenuItem = await client.create(menuItemData);
      console.log('Created new menu item:', newMenuItem);
      return newMenuItem;
    } catch (error) {
      console.error('Error creating menu item:', error);
    }
  };
  
const menuItemData = {
    _type: 'menuItem',
    restaurantId: '12345',
    name: 'Pizza Margherita',
    description: 'Classic Italian pizza with mozzarella and basil',
    price: 12.99,
    image: {
      _type: 'image',
      asset: { _ref: 'image-xyz123-abc' },
    },
    category: 'Pizza',
    featured: true,
    badge: 'Chef Special',
};
  
createMenuItem(menuItemData);
  