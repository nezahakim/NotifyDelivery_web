import client from "$lib/sanity/client";

const updateReview = async (id: any, updateData: any) => {
    try {
      const updatedReview = await client.patch(id)
        .set(updateData)
        .commit();
      console.log('Updated review:', updatedReview);
      return updatedReview;
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };
  
  const updateReviewData = { helpful: 5 }; 
  let reviewId = 1; // Increase helpful votes
  updateReview(reviewId, updateReviewData);
  