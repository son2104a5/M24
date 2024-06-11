interface PostType {
    id: number
    title: string;
    author: string;
    content: string;
  }
  
const Post: React.FC<{ post: PostType }> = ({ post }) => {
    return (
      <div>
        <p>id: {post.id}</p>
        <h3>{post.title}</h3>
        <p><strong>Tác giả:</strong> {post.author}</p>
        <p>{post.content}</p>
        <hr />
      </div>
    );
};
  
export default Post;