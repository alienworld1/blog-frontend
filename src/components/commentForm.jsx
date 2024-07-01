import UserContext from '../UserContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CommentForm({ postId }) {
  const { isAuthenticated } = useContext(UserContext);
  const [comment, setComment] = useState('');

  if (!isAuthenticated) {
    return (
      <div className="flex w-full justify-center text-lg p-4 border-violet-300 border-2 rounded container">
        <p className="text-slate-50">
          You need to{' '}
          <Link to="/log-in" className="text-violet-300 hover:text-violet-500">
            {' '}
            log in{' '}
          </Link>
          or{' '}
          <Link to="/sign-up" className="text-violet-300 hover:text-violet-500">
            sign up
          </Link>{' '}
          to post comments.
        </p>
      </div>
    );
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch(`/api/posts/${postId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ body: comment }),
    });

    const responseData = await response.json();

  };

  return (
    <form className="container p-4" onSubmit={handleSubmit}>
      <label
        htmlFor="body"
        className="block text-slate-50 text-lg font-bold mb-2"
      >
        Post a comment
      </label>
      <textarea
        name="body"
        id="body"
        value={comment}
        onChange={e => setComment(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-violet-300"
        rows="4"
        placeholder="Write your comment here..."
        required
      ></textarea>
      <button
        type="submit"
        className="bg-violet-400 hover:bg-violet-500 text-slate-950 font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-violet-600 mt-2"
      >
        Submit
      </button>
    </form>
  );
}

CommentForm.propTypes = {
  postId: PropTypes.string,
};

export default CommentForm;
