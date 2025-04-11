import { useEffect, useState } from "react";
import { fetchUsers, fetchUserPosts, fetchPostComments } from "../utils/api";
import { getTopUsersByComments } from "../utils/helpers";

export default function TopUsersPage() {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const users = await fetchUsers();
      const result = await getTopUsersByComments(
        users,
        fetchUserPosts,
        fetchPostComments
      );
      setTopUsers(result);
    })();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Top Users</h1>
      {topUsers.map((user) => (
        <div key={user.id} className="p-4 border mb-2 rounded-lg shadow-md">
          <p className="font-semibold">{user.name}</p>
          <p>Comments on posts: {user.totalComments}</p>
        </div>
      ))}
    </div>
  );
}
