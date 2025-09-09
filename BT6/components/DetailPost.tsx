type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

function DetailPost({ post }: { post: Post }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <p><b>Id:</b> {post.id}</p>
      <p><b>Title:</b> {post.title}</p>
      <p><b>Content:</b> {post.content}</p>
      <p><b>Author:</b> {post.author}</p>
      <hr />
    </div>
  );
}

export default DetailPost;
