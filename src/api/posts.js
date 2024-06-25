import { useEffect, useState } from 'react';

async function getAllPublicPosts() {
  const response = await fetch('/api/posts/public');
  const posts = await response.json();

  return posts;
}

async function getPostById(id) {
  const response = await fetch(`/api/posts/${id}`);
  const post = await response.json();

  return post;
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

export { getAllPublicPosts, getPostById, useFetch };
