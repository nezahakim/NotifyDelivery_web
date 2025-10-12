import client from "$lib/sanity/client";

const deleteReview = async (id: any) => {
    try {
      await client.delete(id);
      console.log('Deleted review');
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };
  let reviewId = 1;
  deleteReview(reviewId);
  