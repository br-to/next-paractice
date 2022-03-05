import Layout from '../components/Layout';
import { getAllPostData } from '../lib/post';
import Post from '../components/Post';

export const getStaticProps = async () => {
  const posts = await getAllPostData();
  // console.log(posts);
  return {
    props: { posts },
  };
};
const Blog = ({ posts }) => (
  <Layout title="blog">
    <div className="m-10">
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  </Layout>
);

export default Blog;
