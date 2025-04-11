export const getTopUsersByComments = async (
  users,
  fetchUserPosts,
  fetchPostComments
) => {
  const userStats = [];

  for (const user of users) {
    const posts = await fetchUserPosts(user.id);
    let totalComments = 0;

    for (const post of posts) {
      const comments = await fetchPostComments(post.id);
      totalComments += comments.length;
    }

    userStats.push({ ...user, totalComments });
  }

  return userStats
    .sort((a, b) => b.totalComments - a.totalComments)
    .slice(0, 5);
};
