import client from "$lib/sanity/client";
import type { SanityDocumentStub } from "@sanity/client";

const createRestaurantContent = async (restaurantContentData: SanityDocumentStub<Record<string, any>>) => {
    try {
      const newContent = await client.create(restaurantContentData);
      console.log('Created new restaurant content:', newContent);
      return newContent;
    } catch (error) {
      console.error('Error creating restaurant content:', error);
    }
  };
  
  const restaurantContentData = {
    _type: 'restaurantContent',
    restaurantId: '12345',
    description: 'A fine dining experience with exquisite cuisine.',
    about: 'Our restaurant has been serving great food for over 20 years...',
    coverImage: {
      _type: 'image',
      asset: { _ref: 'image-xyz123-abc' },
    },
    tags: ['Italian', 'Fine Dining'],
    hours: 'Mon-Sun: 11:00 AM - 10:00 PM',
  };
  
createRestaurantContent(restaurantContentData);
  