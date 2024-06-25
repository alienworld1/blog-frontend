import { useEffect, useState } from 'react';

async function getAllPublicPosts() {
  const response = await fetch('/api/posts/public');
  const posts = await response.json();

  if (!response.ok) {
    throw new Error(posts.message);
  }

  return posts;
}

async function getPostById(id) {
  const response = await fetch(`/api/posts/${id}`);
  const post = await response.json();

  if (!response.ok) {
    throw new Error(post.message);
  }

  return post;
}

async function getCommentById(id) {
  const response = await fetch(`/api/posts/comments/${id}`);

  const comment = await response.json();
  if (!response.ok) {
    throw new Error(comment.message);
  }

  return comment;
}

const useFetch = (callback, argument) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setResponse(await callback(argument));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  });

  return { response, error, loading };
};

export { getAllPublicPosts, getPostById, getCommentById, useFetch };
