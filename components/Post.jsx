import Link from 'next/link';

const Post = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>
      <Link href={`/blog/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200 my-2">
          {post.title}
        </span>
      </Link>
    </div>
  );
};

export default Post;
