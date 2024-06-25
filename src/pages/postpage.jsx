import { useParams, Navigate } from 'react-router-dom';
import { useFetch, getPostById } from '../api/posts';
import { TailSpin } from 'react-loading-icons';
import { MdError } from 'react-icons/md';
import Comment from '../components/comment';
import { Link } from 'react-router-dom';

function PostPage() {
  const { id } = useParams();

  const { response, loading, error } = useFetch(getPostById, id);

  if (error?.status === 404) {
    return <Navigate to="/posts/not-found" replace={true} />;
  }

  return (
    <>
      <article className="rounded-sm bg-violet-300 p-4 mx-auto">
        {loading ? (
          <TailSpin stroke="#5b21b6" />
        ) : error ? (
          <div className="text-red-700 text-lg font-semibold">
            <MdError className="inline text-2xl mb-2" />
            <span className="mx-2">{error.message}</span>
          </div>
        ) : (
          <>
            <h1 className="font-semibold text-3xl mb-3">{response.title}</h1>
            <p>{response.body}</p>
          </>
        )}
        <Link to="/" className="text-violet-900 hover:underline">
          Return to Home
        </Link>
      </article>
      <hr className="mt-4 border-violet-300 border-3" />
      <h1 className="text-slate-50 text-2xl my-2">Comments</h1>
      {response?.comments.map(comment => (
        <Comment key={comment} id={comment} />
      ))}
    </>
  );
}
export default PostPage;
