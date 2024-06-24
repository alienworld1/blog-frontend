import Post from '../components/post';
import { useFetch, getAllPublicPosts } from '../api/posts';
import { Link } from 'react-router-dom';
import { MdError } from 'react-icons/md';
import { TailSpin } from 'react-loading-icons';

function PostList() {
  const { response, error, loading } = useFetch(getAllPublicPosts);

  return (
    <div className="flex flex-col gap-4">
      {loading ? (
        <TailSpin stroke="#f5f3ff" />
      ) : error ? (
        <div className="text-red-400 text-lg font-semibold">
          <MdError className="inline text-2xl mb-2" />
          <span className="mx-2">{error.message}</span>
        </div>
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
