import { useState } from 'react';
import Post from './Post';

const ListPost = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Title 1', content: 'Content 1', author: 'Author 1' },
    { id: 2, title: 'Title 2', content: 'Content 2', author: 'Author 2' },
    { id: 3, title: 'Title 3', content: 'Content 3', author: 'Author 3' }
  ]);

  return (
    <div>
      <h2>List of Posts</h2>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListPost;
