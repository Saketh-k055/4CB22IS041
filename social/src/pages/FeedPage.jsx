import { useEffect, useState } from 'react';
import { fetchUsers, fetchUserPosts } from '../utils/api';
import { getRandomImage } from '../utils/randomImage';

export default function FeedPage() {
  const [feed, setFeed] = useState([]);

  const loadFeed = async () => {
    const users = await fetchUsers();
    let allPosts = [];

    for (const user of users) {
      const posts = await fetchUserPosts(user.id);
      allPosts.push(...posts.map(post => ({ ...post, userName: user.name, image: getRandomImage() })));
    }

    // Newest on top
    allPosts.sort((a, b) => b.id - a.id);
    setFeed(allPosts);
  };

  useEffect(() => {
    loadFeed();

    const interval = setInterval(() => {
      loadFeed(); // Poll every 30s
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Live Feed</h1>
      {feed.map(post => (
        <div key={post.id} className="p-4 border mb-4 rounded-lg shadow-md">
          <img src={post.image} alt="Post" className="mb-2 rounded" />
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-700">{post.body}</p>
          <p className="text-sm text-gray-500">Posted by: {post.userName}</p>
        </div>
      ))}
    </div>
  );
}
