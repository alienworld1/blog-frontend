import { useFetch, getCommentById } from '../api/posts';
import { Bars } from 'react-loading-icons';
import { MdError } from 'react-icons/md';
import PropTypes from 'prop-types';

function Comment({ id }) {
  const { response, loading, error } = useFetch(getCommentById, id);

  return (
    <div className="rounded-sm bg-violet-300 container p-4">
      {loading ? (
        <Bars stroke="#5b21b6" fill="#5b21b6" />
      ) : error ? (
        <div className="text-red-700 text-lg font-semibold">
          <MdError className="inline text-2xl mb-2" />
          <span className="mx-2">{error.message}</span>
        </div>
      ) : (
        <>
          <p>{response.body.replaceAll('&#x27;', "'")}</p>
          <h2 className="italic text-gray-800">
            Posted by {response.author.username}
          </h2>
        </>
      )}
    </div>
  );
}

Comment.propTypes = {
  id: PropTypes.string,
};

export default Comment;
