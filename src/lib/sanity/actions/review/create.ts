import client from "$lib/sanity/client";

const createReview = async (reviewData: any) => {
    try {
      const newReview = await client.create(reviewData);
      console.log('Created new review:', newReview);
      return newReview;
    } catch (error) {
      console.error('Error creating review:', error);
    }
  };
  
  const reviewData = {
    _type: 'review',
    restaurantId: '12345',
    userName: 'John Doe',
    rating: 5,
    comment: 'Excellent food and service!',
    date: new Date().toISOString(),
    helpful: 0,
  };
  
  createReview(reviewData);
  