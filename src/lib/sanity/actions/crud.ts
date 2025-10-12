import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

// Create a new post
const newPost = {
  _type: 'post',
  title: 'My New Post',
  body: 'This is my post content.',
  publishedAt: new Date().toISOString(),
};

client.create(newPost).then(createdPost => {
  console.log('Created new post:', createdPost);

  // Read the newly created post
  const query = `*[_type == "post" && _id == $id]`;
  client.fetch(query, { id: createdPost._id }).then(fetchedPost => {
    console.log('Fetched post:', fetchedPost);

    // Update the post
    client.patch(fetchedPost._id)
      .set({ title: 'Updated Post Title' })
      .commit()
      .then(updatedPost => {
        console.log('Updated post:', updatedPost);

        // Delete the post
        client.delete(updatedPost._id).then(() => {
          console.log('Deleted post');
        }).catch(err => console.error('Error deleting post:', err));
      })
      .catch(err => console.error('Error updating post:', err));
  }).catch(err => console.error('Error fetching post:', err));
}).catch(err => console.error('Error creating post:', err));
