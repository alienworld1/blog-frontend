import { useParams, Navigate } from 'react-router-dom';
import { useFetch, getPostById } from '../api/posts';
import { TailSpin } from 'react-loading-icons';
import { MdError } from 'react-icons/md';

function PostPage() {
  const { id } = useParams();

  const { response, loading, error } = useFetch(getPostById, id);

  if (error?.status === 404) {
    return <Navigate to="/posts/not-found" replace={true} />;
  }

  return (
    <div className="rounded-sm bg-violet-300 p-4">
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
    </div>
  );
}
export default PostPage;
