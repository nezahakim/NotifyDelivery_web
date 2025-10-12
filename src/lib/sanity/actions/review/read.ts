import client from "$lib/sanity/client";

const fetchReview = async (id: any) => {
    try {
      const review = await client.getDocument(id);
      console.log('Fetched review:', review);
      return review;
    } catch (error) {
      console.error('Error fetching review:', error);
    }
  };
  
  const reviewId = 'review-id-123'; // Example review ID
  fetchReview(reviewId);
  