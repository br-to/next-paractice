import Layout from '../../components/Layout';
import Link from 'next/link';
import { getPostAllIds, getPostData } from '../../lib/post';

const BlogContent = ({ post }) => {
  if (!post) {
    return <div>loadConfig...</div>;
  }

  return (
    <Layout title={post.title}>
      <p className="m-4">{post.id}</p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      <Link href="/blog">
        <a className="m-4">一覧に戻る</a>
      </Link>
    </Layout>
  );
};

export default BlogContent;

export const getStaticPaths = async () => {
  const paths = await getPostAllIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostData(params.id);
  return {
    props: { post },
  };
};
