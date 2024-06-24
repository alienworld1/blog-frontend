import Post from '../components/post';
import { useFetch, getAllPublicPosts } from '../api/posts';
import { Link } from 'react-router-dom';

function PostList() {
  const { response, error, loading } = useFetch(getAllPublicPosts);

  return (
    <div className="flex flex-col gap-4">
      {loading ? (
        <h1 className="text-slate-50 text-xl font-semibold">Loading...</h1>
      ) : error ? (
        <p className="text-slate-50 text-lg font-semibold">{error.message}</p>
      ) : (
        response.map(post => (
          <Link key={post._id} to={`posts/${post._id}`}>
            <Post post={post} />
          </Link>
        ))
      )}
    </div>
  );
}

export default PostList;
