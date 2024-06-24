import PropTypes from 'prop-types';
import { useFetch, getAllPublicPosts } from '../api/posts';

function PostCard({ post, error, loading }) {
  return (
    <div className="p-4 shadow-md bg-violet-200 text-zinc-950">Loading...</div>
  );
}

PostCard.propTypes = {
  post: PropTypes.object({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
  error: PropTypes.instanceOf(Error),
  loading: PropTypes.bool,
};

export default PostCard;
